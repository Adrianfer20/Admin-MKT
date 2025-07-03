import { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import useGetApi from "../hooks/useGetApi";
import { useCDM } from "../hooks/useCMD";
import { usePdf } from "../hooks/usePdf";
import useAnimationTimeout from "../../../shared/hooks/useAnimationTimeout";
import { useFilteredTickets } from "../hooks/useFilteredTickets";

import { deleteTicket } from "../services/database";
import DashboardHeader from "../components/DashboardHeader";
import TicketFilters from "../components/TicketFilters";
import TicketList from "../components/TicketList";

const PASSWORD = "1234";

export default function Dashboard() {
  const { tickets, isLoading, error } = useGetApi();
  const { printPDF } = usePdf();
  const { cmdAddUser, cmdDeleteUsers } = useCDM();

  const [storedItemId, setStoredItemId] = useState(() => localStorage.getItem("itemId"));
  const [sortCriteria, setSortCriteria] = useState("fecha");
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchCode, setSearchCode] = useState("");

  const filteredTickets = useFilteredTickets(tickets, sortCriteria, sortOrder, searchCode);

  useEffect(() => {
    const syncStorage = () => setStoredItemId(localStorage.getItem("itemId"));
    window.addEventListener("storage", syncStorage);
    return () => window.removeEventListener("storage", syncStorage);
  }, []);

  useAnimationTimeout([tickets], ".animacion", 6000);

  const toggleSortOrder = () =>
    setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));

  const handlerDelete = useCallback(async (ticket) => {
    if (!window.confirm(`¿Eliminar ticket de ${ticket.zeller}?`)) return;

    const clave = window.prompt("Introduce la clave para confirmar:");
    if (clave !== PASSWORD) {
      toast.error("Clave incorrecta. No se eliminó el ticket.");
      return;
    }

    try {
      await toast.promise(deleteTicket(ticket.id), {
        loading: "Eliminando...",
        success: res => res.message || "Ticket eliminado correctamente",
        error: err => err.message || "Error al eliminar el ticket",
      });
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
      <DashboardHeader />
      <section className="px-4 md:px-8 max-w-6xl mx-auto">
        <TicketFilters
          searchCode={searchCode}
          setSearchCode={setSearchCode}
          sortCriteria={sortCriteria}
          setSortCriteria={setSortCriteria}
          sortOrder={sortOrder}
          toggleSortOrder={toggleSortOrder}
        />
        <TicketList
          tickets={filteredTickets}
          storedItemId={storedItemId}
          printPDF={printPDF}
          cmdAddUser={cmdAddUser}
          cmdDeleteUsers={cmdDeleteUsers}
          handlerDelete={handlerDelete}
        />
      </section>
    </>
  );
}
