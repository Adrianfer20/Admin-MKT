import TicketItem from "./TicketItem";

export default function TicketList({ tickets, storedItemId, printPDF, cmdAddUser, cmdDeleteUsers, handlerDelete }) {
  return (
    <ul className="flex flex-col gap-4 max-h-screen overflow-y-auto pr-3">
      {tickets.map(ticket => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          isActive={ticket.id === storedItemId}
          onPrint={() => printPDF(ticket)}
          onAddUser={() => cmdAddUser(ticket)}
          onDeleteUser={() => cmdDeleteUsers(ticket)}
          onDelete={() => handlerDelete(ticket)}
        />
      ))}
    </ul>
  );
}
