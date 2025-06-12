export default function TicketItem({ ticket, isActive, onPrint, onCopy, onDelete }) {
  return (
    <li
      key={ticket.id}
      className={`bg-white p-4 rounded-lg ${isActive ? "bg-lemon-ar-400" : "bg-white"} shadow-md hover:shadow-lg transition`}
      tabIndex={0}
    >
      <div className="flex flex-col gap-2 text-sm md:text-base">

        <div className="flex flex-wrap justify-between items-center">
          <div className="space-x-2">
          <span><strong>ID:</strong> {ticket.id?.slice(0, 4)}</span>
            <span><strong>Perfil:</strong> {ticket.profile ?? "N/A"}</span>
          </div>
          <span><strong>Tickets:</strong> {ticket.codes?.length ?? 0}</span>
        </div>

      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <span><strong>Fecha:</strong> {ticket.date ?? "Sin fecha"}</span>
            <span className="capitalize"><strong>Vendedor:</strong> {ticket.zeller ?? "Desconocido"}</span>
        </div>

        <div className="flex justify-end flex-wrap gap-2">
          <button
            onClick={onPrint}
            className="bg-biscay-800 text-white hover:bg-biscay-800 hover:text-lemon-ar-300 rounded-md px-4 py-1 text-xs md:text-sm uppercase"
            aria-label="Imprimir ticket"
          >
            Imprimir
          </button>
          <button
            onClick={onCopy}
            className="bg-biscay-800 text-white hover:bg-biscay-800 hover:text-lemon-ar-300 rounded-md px-4 py-1 text-xs md:text-sm uppercase"
            aria-label="Copiar comando CMD"
          >
            CMD
          </button>
          <button
            onClick={onDelete}
            className="border-2 border-red-600 text-red-600 hover:bg-red-800 hover:text-white rounded-md px-4 py-1 text-xs md:text-sm uppercase"
            aria-label="Copiar comando CMD"
          >
            Eliminar
          </button>
        </div>

      </div>
    </li>
  );
}