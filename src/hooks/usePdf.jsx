import { useEffect, useState } from "react";

export function usePdf() {
  const [tickets, setTickets] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const beforePrint = () => {
    // Código que se ejecuta antes de la impresión
    if(!tickets) return
    console.log(tickets);
    const $root = document.getElementById("root");
    // Crea un elemento div
    const div = document.createElement("div");
    div.id = "print";
    div.className = "min-h-screen bg-slate-100 text-slate-900";

    // Crea un elemento h2
    const h2 = document.createElement("h2");
    h2.className = "text-2xl font-bold text-center mb-4";
    h2.textContent = "Configuracion Registrada";

    // Crea un elemento div para los detalles
    const detailsDiv = document.createElement("div");
    detailsDiv.className = "grid grid-cols-4 gap-2 text-center py-3";

    // Crea elementos h4 para los detalles
    const serverH4 = document.createElement("h4");
    serverH4.textContent = "Servidor: ";
    const serverValue = document.createElement("i");
    serverValue.className = "font-semibold";
    serverValue.textContent = tickets.server;
    serverH4.appendChild(serverValue);

    const profileH4 = document.createElement("h4");
    profileH4.textContent = "Perfil: ";
    const profileValue = document.createElement("i");
    profileValue.className = "font-semibold";
    profileValue.textContent = tickets.profile;
    profileH4.appendChild(profileValue);

    const uptimeH4 = document.createElement("h4");
    uptimeH4.textContent = "Tiempo: ";
    const titleValue = document.createElement("i");
    titleValue.className = "font-semibold";
    titleValue.textContent = tickets.uptime;
    uptimeH4.appendChild(titleValue);

    const countH4 = document.createElement("h4");
    countH4.textContent = "Cantidad: ";
    const countValue = document.createElement("i");
    countValue.className = "font-semibold";
    countValue.textContent = tickets.codes.length;
    countH4.appendChild(countValue);

    // Agrega los elementos h4 al div de detalles
    detailsDiv.appendChild(serverH4);
    detailsDiv.appendChild(profileH4);
    detailsDiv.appendChild(uptimeH4);
    detailsDiv.appendChild(countH4);

    // Crea un elemento div para los códigos
    const codesDiv = document.createElement("div");
    codesDiv.className = "grid gap-4";

    // Crea un elemento h4 para los códigos
    const codesH4 = document.createElement("h4");
    codesH4.className = "font-semibold uppercase indent-2";
    codesH4.textContent = "Codigos:";

    // Crea una lista ul para los códigos
    const ul = document.createElement("ul");
    ul.className = "grid gap-2 grid-cols-6";

    // Agrega los elementos li con los códigos al ul
    if (tickets.codes) {
      tickets.codes.forEach(({ code }) => {
        const li = document.createElement("li");
        li.className = "bg-slate-800 text-3xl font-semibold list-none text-center p-2";
        li.textContent = code;
        ul.appendChild(li);
      });
    }

    // Agrega el h4 y la lista ul al div de códigos
    codesDiv.appendChild(codesH4);
    codesDiv.appendChild(ul);

    // Agrega todos los elementos al div principal
    div.appendChild(h2);
    div.appendChild(detailsDiv);
    div.appendChild(codesDiv);

    $root.appendChild(div);
  };

  const afterPrint = () => {
    // Código que se ejecuta después de la impresión o cuando el usuario cancela
    const $pdf = document.getElementById('print')
    if($pdf) $pdf.remove()
  };

  useEffect(() => {
    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);

    return () => {
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
    };
  }, [beforePrint, tickets]);

  const printPDF = (tickets) => {
    setTickets(tickets);
    setTimeout(() => {
      const screenPrint = window;
      // eslint-disable-next-line react/prop-types
      screenPrint.document.title =
        tickets.codes.length + " tickets - " + tickets.date;
      screenPrint.print();
    }, 1000);
  };
  return { printPDF };
}
