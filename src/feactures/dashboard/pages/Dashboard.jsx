import { useEffect, useMemo, useState, useCallback } from "react";

// Hooks personalizados
import useGetApi from "../hooks/useGetApi";
import { useCDM } from "../hooks/useCMD";
import { usePdf } from "../hooks/usePdf";
import useAnimationTimeout from "../../../shared/hooks/useAnimationTimeout";

// Servicios y componentes
import { deleteTicket } from "../services/database";
import TicketItem from "../components/TicketsItems";

// Librerías
import toast from "react-hot-toast";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const parseDate = (str) => {
  if (!str) return new Date(0);
  const [day, month, year] = str.split("/").map(Number);
  return new Date(year, month - 1, day);
};

const PASSWORD = "1234";

export default function Dashboard() {
  const { tickets, isLoading, error } = useGetApi();
  const { printPDF } = usePdf();
  const { copyCMD } = useCDM();

  const [storedItemId, setStoredItemId] = useState(() => localStorage.getItem("itemId"));
  const [sortCriteria, setSortCriteria] = useState("fecha");
  const [sortOrder, setSortOrder] = useState("desc");

  // Escucha cambios en localStorage
  useEffect(() => {
    const handleStorageChange = () => setStoredItemId(localStorage.getItem("itemId"));
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useAnimationTimeout([tickets], ".animacion", 6000);

  const sortedTickets = useMemo(() => {
    if (!tickets) return [];

    const sorted = [...tickets].sort((a, b) => {
      let comp = 0;

      if (sortCriteria === "zeller") {
        comp = a.zeller?.localeCompare(b.zeller) ?? 0;
      } else if (sortCriteria === "fecha") {
        comp = parseDate(a.date).getTime() - parseDate(b.date).getTime();
      } else if (sortCriteria === "profile") {
        comp = a.profile?.localeCompare(b.profile) ?? 0;
      }

      return sortOrder === "asc" ? comp : -comp;
    });

    return sorted;
  }, [tickets, sortCriteria, sortOrder]);

  const toggleSortOrder = useCallback(() => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  }, []);

  const handlerDelete = useCallback(async (ticket) => {
    const confirmDelete = window.confirm(`¿Eliminar ticket de ${ticket.zeller}?`);
    if (!confirmDelete) return;

    const clave = window.prompt("Introduce la clave para confirmar:");
    if (clave !== PASSWORD) {
      toast.error("Clave incorrecta. No se eliminó el ticket.");
      return;
    }

    try {
      await toast.promise(
        deleteTicket(ticket.id),
        {
          loading: "Eliminando...",
          success: (res) => res.message || "Ticket eliminado correctamente",
          error: (err) => err.message || "Error al eliminar el ticket",
        }
      );

      // Si usas Zustand/Redux, puedes disparar aquí un refetch/update
    } catch (error) {
      console.error("Error al eliminar el ticket:", error);
    }
  }, []);

  if (isLoading) {
    return (
      <header className="py-24 text-center">
        <h1 className="text-4xl font-bold text-biscay-800 uppercase">Cargando...</h1>
      </header>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <>
      {/* Header */}
      <header className="bg-biscay-800 text-white px-8 py-12 md:py-20 mb-12 rounded-br-[100px] shadow-md">
        <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">Registro de Tickets</h1>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl">
          Bienvenido a la administración de tickets MikroTik. Registra y gestiona tus tickets de forma sencilla.
        </p>
      </header>

      {/* Filtros */}
      <section className="px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 mb-6">
          <h2 className="bg-biscay-800 text-white text-md md:text-xl font-semibold uppercase rounded-3xl px-6 py-2">
            Lista de Códigos
          </h2>

          <div className="flex items-center gap-4">
            <label htmlFor="sort" className="text-biscay-950 text-base font-medium">
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
              <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-biscay-800 flex items-center justify-center rounded-r-md">
                <FiChevronDown size={18} className=" text-white" />
              </div>
            </div>

            <button
              onClick={toggleSortOrder}
              title={sortOrder === "asc" ? "Orden ascendente" : "Orden descendente"}
              className="flex items-center justify-center p-1.5 md:p-2 rounded-md bg-biscay-800 text-white hover:bg-biscay-900 focus:ring-2 focus:ring-biscay-900 shadow-md"
            >
              {sortOrder === "asc" ? <FaArrowUp size={18} /> : <FaArrowDown size={18} />}
            </button>
          </div>
        </div>

        {/* Lista de Tickets */}
        <ul className="flex flex-col gap-4 max-h-screen overflow-y-auto pr-3">
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