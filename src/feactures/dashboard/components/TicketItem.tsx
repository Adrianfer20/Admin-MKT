import { AiFillDelete, AiFillFileAdd, AiOutlineDownload } from "react-icons/ai";
import type { TicketItemProps } from "../types/types.ts";

export default function TicketItem({
  ticket,
  isActive,
  onPrint,
  onAddUser,
  onDeleteUser,
  onDelete,
}: TicketItemProps) {
  return (
    <li
      className={`rounded-2xl p-4 shadow-md hover:shadow-lg transition-all ${
        isActive ? "bg-lemon-ar-400" : "bg-white"
      }`}
      tabIndex={0}
    >
      {/* Información principal */}
      <div className="flex flex-col gap-2 text-sm md:text-base">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
          <div className="flex flex-wrap gap-2">
            <span>
              <strong>ID:</strong> {ticket.id?.slice(0, 4)}
            </span>
            <span>
              <strong>Perfil:</strong> {ticket.profile ?? "N/A"}
            </span>
          </div>
          <span>
            <strong>Tickets:</strong> {ticket.codes?.length ?? 0}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-pretty">
          <span>
            <strong>Fecha:</strong> {ticket.date ?? "Sin fecha"}
          </span>
          <span className="capitalize">
            <strong>Vendedor:</strong> {ticket.zeller ?? "Desconocido"}
          </span>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex flex-wrap gap-2 w-full justify-end">
          <ActionButton
            label="Descargar"
            icon={<AiOutlineDownload size={18} />}
            onClick={onPrint}
          />
          <IconButton icon={<AiFillFileAdd size={18} />} onClick={onAddUser} label="Copiar comando CMD" />
          <IconButton icon={<AiFillDelete size={18} />} onClick={onDeleteUser} label="Eliminar usuario" />
          <IconButton
            icon={<AiFillDelete size={18} />}
            onClick={onDelete}
            label="Eliminar ticket"
            className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          />
        </div>
      </div>
    </li>
  );
}

// Botón con texto e ícono
function ActionButton({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-biscay-800 text-white hover:text-lemon-ar-300 rounded-md px-4 py-1 text-xs md:text-sm uppercase"
      aria-label={label}
    >
      <span>{label}</span>
      {icon}
    </button>
  );
}

// Botón solo ícono
function IconButton({
  icon,
  onClick,
  label,
  className = "",
}: {
  icon: React.ReactNode;
  onClick: () => void;
  label: string;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 bg-biscay-800 text-white hover:text-lemon-ar-300 rounded-md px-3 py-1 text-xs md:text-sm uppercase ${className}`}
      aria-label={label}
    >
      {icon}
    </button>
  );
}
