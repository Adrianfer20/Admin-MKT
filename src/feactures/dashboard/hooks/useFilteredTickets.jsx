import { useMemo } from "react";
import { parseDate } from "../../../shared/utils/parseDate";

export function useFilteredTickets(tickets, sortCriteria, sortOrder, searchCode) {
  const sortedTickets = useMemo(() => {
    if (!tickets) return [];

    const sorted = [...tickets].sort((a, b) => {
      let comp = 0;
      if (sortCriteria === "zeller") {
        comp = a.zeller?.localeCompare(b.zeller) ?? 0;
      } else if (sortCriteria === "fecha") {
        comp = parseDate(a.date).getTime() - parseDate(b.date).getTime();
      } else if (sortCriteria === "profile") {
        comp = a.profile?.localeCompare(b.profile) ?? 0;
      }
      return sortOrder === "asc" ? comp : -comp;
    });

    return sorted;
  }, [tickets, sortCriteria, sortOrder]);

  const filteredTickets = useMemo(() => {
    if (!searchCode) return sortedTickets;

    return sortedTickets.filter(ticket =>
      ticket.codes?.some(c =>
        typeof c.code === "string" && c.code.toLowerCase().includes(searchCode.toLowerCase())
      )
    );
  }, [searchCode, sortedTickets]);

  return filteredTickets;
}
