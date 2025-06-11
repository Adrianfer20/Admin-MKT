import { doc, getDoc, collection, query, limit, getDocs } from "firebase/firestore";
import { db } from "./firebase.config.js"; // ajusta el path a tu archivo de configuración

export const obtenerUnTicket = async () => {
  try {
    // Trae el primer documento de la colección "tickets"
    const q = query(collection(db, "tickets"), limit(1));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      console.log("No se encontraron tickets.");
      return;
    }

    const ticketDoc = snapshot.docs[0];
    const data = ticketDoc.data();

    console.log("Documento del ticket:");
    console.log("ID:", ticketDoc.id);
    console.log("Datos:", data);

    return data;
  } catch (error) {
    console.error("Error al obtener el ticket:", error);
  }
};


