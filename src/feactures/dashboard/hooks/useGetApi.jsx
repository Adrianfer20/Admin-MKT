import { useEffect, useState } from "react";
import { db } from "../../../config/firebase.config";
import { collection, onSnapshot } from "firebase/firestore";

export default function useGetApi() {
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "tickets"),
      (snapshot) => {
        const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTickets(docs);
        setIsLoading(false);
      },
      (err) => {
        setError(err.message);
        setIsLoading(false);
      }
    );

    return () => unsubscribe(); // limpia el listener al desmontar
  }, []);

  return { tickets, isLoading, error };
}
