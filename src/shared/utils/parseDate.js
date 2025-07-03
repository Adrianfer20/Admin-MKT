export const parseDate = (str) => {
  if (!str) return new Date(0);
  const [day, month, year] = str.split("/").map(Number);
  return new Date(year, month - 1, day);
};
