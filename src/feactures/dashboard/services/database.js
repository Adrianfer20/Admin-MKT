import { doc, deleteDoc } from "firebase/firestore";
import {db} from '../../../config/firebase.config'


export const deleteTicket = async (id) => {
  try {
    await deleteDoc(doc(db, "tickets", id));
    return {
      error: false,
      message : `Documento con ID ${id} eliminado correctamente.`
    }
  } catch (error) {
    return {
      error: true,
      message: "Error al eliminar el documento:", error
    }
  }
};