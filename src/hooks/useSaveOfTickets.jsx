
import { saveTicketsFirestore } from '../firebase/ticket.firestore';

export function useSaveOfTickets() {
  let message = '';

  const saveOfTickets = async (tickets) => {
    try {
      const res = await saveTicketsFirestore(tickets);

      //Documento Guarddo Sadisfactoriamente
      if (!res.error) {
        message = 'Se ha guardado los nuevos tickets...';
        localStorage.setItem('itemId', res.id)
        // Redirige a la página de inicio ("/") después de guardar satisfactoriamente
        setTimeout(() => {
            window.location.href = '/inicio';
        }, 1500);
      }
      message = res.message
    } catch (e) {
      console.error('Error al guardar el documento:', e);
      return message = "Error al guardar el documento:"+ e
    }
  };

  return { saveOfTickets, message };
}
