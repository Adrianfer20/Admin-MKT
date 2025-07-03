// types.ts
export interface Ticket {
  id: string;
  profile?: string;
  codes?: string[];
  date?: string;
  zeller?: string;
}

export interface TicketFiltersProps {
  searchCode: string;
  setSearchCode: (value: string) => void;
  sortCriteria: string;
  setSortCriteria: (value: string) => void;
  sortOrder: "asc" | "desc";
  toggleSortOrder: () => void;
}


export interface TicketItemProps {
  ticket: Ticket;
  isActive: boolean;
  onPrint: () => void;
  onAddUser: () => void;
  onDeleteUser: () => void;
  onDelete: () => void;
}
