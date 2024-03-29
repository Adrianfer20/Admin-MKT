import { useEffect, useState } from "react";
import { getTicketsFirestore } from "../firebase/ticket.firestore.js";


export default function useGetApi() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          const newTickets = await getTicketsFirestore();
          if (newTickets.length !== 0) {
           setData(newTickets);
          }
        };
    
        fetchData();
      }, []);
    return data;
}

