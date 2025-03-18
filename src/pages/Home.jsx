//Hooks
import useGetApi from "../hooks/useGetApi";
import { useCDM } from "../hooks/useCMD";
import { usePdf } from "../hooks/usePdf";

//Functions
import { removeClassAnimation } from "../funtions/animations";
import { useEffect, useMemo, useState } from "react";


export default function Home() {
  const { tickets, isLoading, error } = useGetApi();

  const { printPDF } = usePdf();
  const { copyCMD } = useCDM();


  const [storedItemId, setStoredItemId] = useState(localStorage.getItem("itemId"));

  useEffect(() => {
    const handleStorageChange = () => {
      setStoredItemId(localStorage.getItem("itemId"));
    };
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  removeClassAnimation(tickets)

  const [sortCriteria, setSortCriteria] = useState("fecha");

  const sortedTickets = useMemo(() => {
    if (!tickets) return [];
    return [...tickets].sort((a, b) => {
      switch (sortCriteria) {
        case "zeller":
          return a.zeller.localeCompare(b.zeller);
        case "fecha":
          return new Date(a.date) - new Date(b.date);
        case "profile":
          return a.profile.localeCompare(b.profile);
        default:
          return 0;
      }
    });
  }, [tickets, sortCriteria]);

  if (isLoading) return <header className="max-w-5xl py-24 mx-auto">
    <h1 className="text-4xl lg:text-5xl text-blu-ar-800 font-bold text-center uppercase mb-2">
      Cargando...
    </h1>
    
  </header>

  if (error) return <p>{error}</p>


  return (
    <>
      <header className="max-w-5xl py-24 mx-auto">
        <h1 className="text-4xl lg:text-5xl text-blu-ar-800 font-bold text-center uppercase mb-2">
          Registro de Tickets
        </h1>
        <p className="text-xl max-w-2xl text-center mx-auto opacity-80">
          Bienvenido a la página de administración de tickets MikroTik. Aquí
          puedes registrar y gestionar los tickets relacionados con tu red
          MikroTik.
        </p>
      </header>

      <section>
        <div className="flex items-center justify-between max-w-6xl mb-6 mx-auto">
          <h2 className="text-2xl text-center font-bold uppercase">Lista de Códigos</h2>

          <div className="flex justify-end items-center">
            <label htmlFor="sort" className="mr-2">Ordenar por:</label>
            <select
              id="sort"
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="zeller">Zeller</option>
              <option value="fecha">Fecha</option>
              <option value="profile">Perfil</option>
            </select>
          </div>
        </div>

        <ul className="max-w-6xl flex flex-col gap-2 mx-auto px-6">
          {sortedTickets.map((ticket, index) => (
            <li
              key={ticket.id}
              className={`flex items-center justify-between px-2 py-1 ${index%2===0?"bg-blu-ar-50":""} rounded cursor-pointer ${ticket.id === storedItemId && "bg-lemon-ar-400"} focus:bg-lemon-ar-400 focus:outline-none active:bg-lemon-ar-600`}
              tabIndex={0}
            >
              <div id={`div-${ticket.id}`}>
                <div className="flex items-center gap-2">
                  <span className="block"><strong>ID:</strong> {ticket.id.slice(0, 4)} </span>
                  <span className="block capitalize"><strong>Zeller:</strong> {ticket.zeller} </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="block"><strong>Perfil:</strong> {ticket.profile} </span>
                  <span className="block"><strong>Tickets:</strong> {ticket.codes.length} </span>
                  <span className="block"><strong>Fecha:</strong> {ticket.date} </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => printPDF(ticket)}
                  className="border-2 border-blu-ar-800 text-blu-ar-800 hover:bg-blu-ar-800 hover:text-blu-ar-50 text-sm uppercase rounded-md py-2 px-4"
                >
                  Imprimir
                </button>
                <button
                  type="button"
                  onClick={() => copyCMD(ticket)}
                  className="border-2 border-blu-ar-800 text-blu-ar-800 hover:bg-blu-ar-800 hover:text-blu-ar-50 text-sm uppercase rounded-md py-2 px-4"
                >
                  CMD
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};



