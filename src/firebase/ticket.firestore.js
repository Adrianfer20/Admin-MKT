import { app } from './firebase.config.js'
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const NAME_DB_TICKETS = "tickets"

export const saveTicketsFirestore = async (Obj) => {
    try {
        const docRef = await addDoc(collection(db, NAME_DB_TICKETS), Obj);
        return { id: docRef.id, error:false}
    } catch (e) {
        return {
            error: true,
            message: "Error adding document:" + e
        }
    }
}

const sortTicketsByDate = (tickets) => {
    return tickets.sort((a, b) => {
      const fechaA = new Date(a.date.split("/").reverse().join("/"));
      const fechaB = new Date(b.date.split("/").reverse().join("/"));
      return fechaB - fechaA;
    });
  };

export const getTicketsFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, NAME_DB_TICKETS));
    const tickets = []

    querySnapshot.forEach((doc) => {
        tickets.push({
            id: doc.id,
            server: doc.data().server,
            title: doc.data().title,
            profile: doc.data().profile,
            uptime: doc.data().uptime,
            date: doc.data().date,
            codes: doc.data().codes,
            zeller: doc.data().zeller
        })
    })

    return sortTicketsByDate(tickets);
}


