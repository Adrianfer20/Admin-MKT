export default function TicketItem({ ticket, isActive, onPrint, onCopy, onDelete }) {
  return (
    <li
      key={ticket.id}
      className={`p-4 rounded-md ${isActive ? "bg-lemon-ar-400" : "bg-white"} shadow-md hover:shadow-lg transition`}
      tabIndex={0}
    >
      <div className="flex flex-col gap-2 text-sm md:text-base">
        <div className="flex flex-wrap justify-between items-center">
          <div className="space-x-1">
            <span><strong>ID:</strong> {ticket.id?.slice(0, 4)}</span>
            <span><strong>Perfil:</strong> {ticket.profile ?? "N/A"}</span>
          </div>
          <span><strong>Tickets:</strong> {ticket.codes?.length ?? 0}</span>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <span className="capitalize"><strong>Vendedor:</strong> {ticket.zeller ?? "Desconocido"}</span>
          <span><strong>Fecha:</strong> {ticket.date ?? "Sin fecha"}</span>
        </div>
      </div>

      <div className="flex justify-end flex-wrap gap-2 mt-4">
        <button
          onClick={onPrint}
          className="border-2 border-blu-ar-800 text-blu-ar-800 hover:bg-blu-ar-800 hover:text-lemon-ar-300 hover:text-white rounded-md px-4 py-1 text-xs md:text-sm uppercase"
          aria-label="Imprimir ticket"
        >
          Imprimir
        </button>
        <button
          onClick={onCopy}
          className="border-2 border-blu-ar-800 text-blu-ar-800 hover:bg-blu-ar-800 hover:text-lemon-ar-300 rounded-md px-4 py-1 text-xs md:text-sm uppercase"
          aria-label="Copiar comando CMD"
        >
          CMD
        </button>
        <button
          onClick={onDelete}
          className="border-2 border-red-600 text-red-600 hover:bg-red-800 hover:text-blu-ar-50 rounded-md px-4 py-1 text-xs md:text-sm uppercase"
          aria-label="Copiar comando CMD"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}