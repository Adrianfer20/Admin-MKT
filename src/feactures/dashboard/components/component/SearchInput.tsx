interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Buscar código..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full sm:w-auto text-sm md:text-base font-medium px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-biscay-900"
    />
  );
}
