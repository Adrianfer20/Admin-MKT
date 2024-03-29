export function generarCodigoAleatorio() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres.charAt(randomIndex);
    }
    return codigo;
}


export function getDate() {
    // Ejemplo de uso
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}


export const getCodesOfTickets = (numberOfTickets)=> {
    const newCodes = []
    for (let index = 0; index < numberOfTickets; index++) {
      const code = generarCodigoAleatorio();
      newCodes.push({code:code,status:false})
    }
    return newCodes;
  }