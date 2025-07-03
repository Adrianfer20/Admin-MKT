import type { TicketFiltersProps } from "../types/types";
import { SearchInput } from "./component/SearchInput";
import { SortSelect } from "./component/SortSelect";
import { SortToggle } from "./component/SortToggle"

export default function TicketFilters({
  searchCode,
  setSearchCode,
  sortCriteria,
  setSortCriteria,
  sortOrder,
  toggleSortOrder,
}: TicketFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <h2 className="text-white bg-biscay-800 text-base sm:text-lg md:text-xl font-semibold uppercase rounded-full px-6 py-2 text-center">
        Lista de Códigos
      </h2>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
        <SearchInput value={searchCode} onChange={setSearchCode} />
        <SortSelect value={sortCriteria} onChange={setSortCriteria} />
        <SortToggle order={sortOrder} onToggle={toggleSortOrder} />
      </div>
    </div>
  );
}
