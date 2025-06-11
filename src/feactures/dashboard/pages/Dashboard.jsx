import { useEffect, useMemo, useState } from "react";

//Hooks
import useGetApi from "../hooks/useGetApi";
import { useCDM } from "../hooks/useCMD";
import { usePdf } from "../hooks/usePdf";

import toast from "react-hot-toast";
//Icons
import { FaArrowDown, FaArrowUp, FaChevronDown } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

//Functions
import useAnimationTimeout from "../../../shared/hooks/useAnimationTimeout";
import TicketItem from "../components/TicketsItems";
import { deleteTicket } from "../services/database";

const parseDate = (str) => {
  if (!str) return new Date(0); // Fecha muy antigua
  const [day, month, year] = str.split("/").map(Number);
  return new Date(year, month - 1, day); // Mes inicia desde 0 en JS
};


export default function Dashboard() {

  const { tickets, isLoading, error } = useGetApi();
  const { printPDF } = usePdf();
  const { copyCMD } = useCDM();

  const [storedItemId, setStoredItemId] = useState(() => localStorage.getItem("itemId"));

  const [sortCriteria, setSortCriteria] = useState("fecha");
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" = primeras a últimas, "desc" = últimas a primeras

  // Función para cambiar el orden asc/desc
  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };


  useEffect(() => {
    const handleStorageChange = () => {
      setStoredItemId(localStorage.getItem("itemId"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useAnimationTimeout([tickets], ".animacion", 6000);

  const sortedTickets = useMemo(() => {
    if (!tickets) return [];
    return [...tickets].sort((a, b) => {
      let comp = 0;
      switch (sortCriteria) {
        case "zeller":
          comp = a.zeller?.localeCompare(b.zeller) ?? 0;
          break;
        case "fecha":
          comp = parseDate(a.date).getTime() - parseDate(b.date).getTime();
          break;
        case "profile":
          comp = a.profile?.localeCompare(b.profile) ?? 0;
          break;
        default:
          comp = 0;
      }
      return sortOrder === "asc" ? comp : -comp;
    });
  }, [tickets, sortCriteria, sortOrder]);

  const handlerDelete = async (ticket) => {
    const confirmDelete = window.confirm(`¿Eliminar ticket de ${ticket.zeller}?`);
    if (!confirmDelete) return;

    toast.promise(
      deleteTicket(ticket.id),
      {
        loading: "Eliminando...",
        success: (res) => res.message,
        error: (err) => err.message || "Error al eliminar el ticket",
      }
    ).then((res) => {
      // Actualiza localmente si usas estado, o recarga si dependes del hook
      // location.reload();
      setTickets((prev) => prev.filter((t) => t.id !== ticket.id)); // si usas estado local
    });
  };


  if (isLoading)
    return (
      <header className="py-24 text-center">
        <h1 className="text-4xl font-bold text-biscay-800 uppercase">Cargando...</h1>
      </header>
    );

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <header className="bg-biscay-800 text-white px-8 py-12 md:py-20 mb-12 rounded-br-[100px] shadow-md">
        <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">Registro de Tickets</h1>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl">
          Bienvenido a la administración de tickets MikroTik. Registra y gestiona tus tickets de forma sencilla.
        </p>
      </header>

      <section className="px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-row items-center justify-between gap-4 mb-6">
          <h2 className=" bg-biscay-800 text-white text-md md:text-xl font-semibold uppercase text-center md:text-left rounded-3xl px-6 py-2">Lista de Códigos</h2>

          <div className="flex items-center gap-4">
            <label htmlFor="sort" className="text-biscay-950 text-sm md:text-base font-medium">
              Filtrar por:
            </label>
            <div className="relative w-fit">
              <select
                id="sort"
                value={sortCriteria}
                onChange={(e) => setSortCriteria(e.target.value)}
                className="appearance-none bg-white text-biscay-800 text-sm md:text-base font-medium px-4 py-1 pr-12 rounded-md border focus:outline-none focus:ring-2 focus:ring-biscay-900 shadow-md"
              >
                <option value="zeller">Vendedor</option>
                <option value="fecha">Fecha</option>
                <option value="profile">Perfil</option>
              </select>

              {/* Ícono con fondo distinto, simula ser parte del select */}
              <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-biscay-800 flex items-center justify-center rounded-r-md">
                <FiChevronDown size={18} className="text-white" />
              </div>
            </div>

            <button
              onClick={toggleSortOrder}
              title={sortOrder === "asc" ? "Orden ascendente" : "Orden descendente"}
              className="flex items-center justify-center px-2 py-2 rounded-md bg-biscay-800 text-white hover:bg-biscay-800 focus:ring-2 focus:ring-[#F1D00A] shadow-md"
            >
              {sortOrder === "asc" ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
            </button>
          </div>

        </div>

        <ul className="flex flex-col gap-4 max-h-screen overflow-y-scroll pr-5 ">
          {sortedTickets.map((ticket) => (
            <TicketItem
              key={ticket.id}
              ticket={ticket}
              isActive={ticket.id === storedItemId}
              onPrint={() => printPDF(ticket)}
              onCopy={() => copyCMD(ticket)}
              onDelete={() => handlerDelete(ticket)}
            />
          ))}
        </ul>
      </section>
    </>
  );
}



