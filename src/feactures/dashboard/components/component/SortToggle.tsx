import { FaArrowDown, FaArrowUp } from "react-icons/fa";

interface SortToggleProps {
  order: "asc" | "desc";
  onToggle: () => void;
}

export function SortToggle({ order, onToggle }: SortToggleProps) {
  return (
    <button
      onClick={onToggle}
      title={order === "asc" ? "Orden ascendente" : "Orden descendente"}
      className="flex items-center justify-center p-2 rounded-md bg-biscay-800 text-white hover:bg-biscay-900 focus:ring-2 focus:ring-biscay-900 shadow-md"
    >
      {order === "asc" ? <FaArrowUp size={18} /> : <FaArrowDown size={18} />}
    </button>
  );
}
