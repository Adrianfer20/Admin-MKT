import { useEffect, useState } from "react";
import { getTicketsFirestore } from "../firebase/ticket.firestore.js";

export default function useGetApi() {
  const [tickets, setTickets] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const newTickets = await getTicketsFirestore();
        if (newTickets.length !== 0) {
          setTickets(newTickets);
        } else {
          setTickets([]);
        }
      } catch (err) {
        setError("Hubo un error al obtener los tickets. Por favor, intenta de nuevo.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { tickets, isLoading, error }; // Devolvemos los tres valores
}
