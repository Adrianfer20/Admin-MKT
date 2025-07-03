import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function TicketFilters({ searchCode, setSearchCode, sortCriteria, setSortCriteria, sortOrder, toggleSortOrder }) {
  return (
    <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 mb-6">
      <h2 className="bg-biscay-800 text-white text-md md:text-xl font-semibold uppercase rounded-3xl px-6 py-2">
        Lista de Códigos
      </h2>

      <div className="flex items-center gap-4">
        <label htmlFor="sort" className="text-biscay-950 text-base font-medium">
          Filtrar por:
        </label>
        <input
          type="text"
          placeholder="Buscar código..."
          value={searchCode}
          onChange={(e) => setSearchCode(e.target.value)}
          className="text-sm md:text-base font-medium px-4 py-1 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-biscay-900"
        />
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
  );
}
