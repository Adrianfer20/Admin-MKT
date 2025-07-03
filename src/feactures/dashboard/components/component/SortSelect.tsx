import { FiChevronDown } from "react-icons/fi";

interface SortSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <div className="relative w-full sm:w-auto">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-white text-biscay-800 text-sm md:text-base font-medium px-4 py-2 pr-12 rounded-md border focus:outline-none focus:ring-2 focus:ring-biscay-900 shadow-md w-full sm:w-auto"
      >
        <option value="zeller">Vendedor</option>
        <option value="fecha">Fecha</option>
        <option value="profile">Perfil</option>
      </select>

      <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-biscay-800 flex items-center justify-center rounded-r-md">
        <FiChevronDown size={18} className="text-white" />
      </div>
    </div>
  );
}
