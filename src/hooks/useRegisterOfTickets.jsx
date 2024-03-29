import { useState } from "react";

import { getDate, getCodesOfTickets } from "../funtions/tickets";

export function useRegisterOfTickets() {
    const [tickets, setTickets] = useState(null)  

    const checkInputs = (form) => {
        const {server, profile, title, acount, uptime, zeller} = Object.fromEntries(new window.FormData(form))

        const newServer = server || "Wifi Por Hora";
        const newProfile = profile || "1hr";
        const newTitle = title || "Wifi Por Hora";  
        const newAcount = acount || 84
        const newUptime = uptime || "01:00:00"
        const newZeller = zeller || "adrianfer";

        let message 
        const isExits = !server || !profile || !title
        if(isExits) message = "Existe un input vacio; Asignaremos los valores predeterminados"

        return {
            server: newServer, 
            profile: newProfile, 
            uptime: newUptime,
            title: newTitle,
            acount: newAcount,
            zeller: newZeller,
            message
        }
    }

    const register = (e)=> {
        e.preventDefault()
        const {server, profile, title, uptime, acount, zeller, message}  = checkInputs(e.target)
        if(message) console.log(message);

        const codes = getCodesOfTickets(acount);

        const newTickets = {
            server,
            profile,
            uptime,
            title,
            zeller,
            codes,
            date: getDate()
        }

        setTickets(newTickets)

    }

    

    return {tickets, register}
}