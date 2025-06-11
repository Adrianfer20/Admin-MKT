import { FiLogOut } from "react-icons/fi";

export function LogoutButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="nav-link nav-link-hover"
    >
      <FiLogOut className="text-lg" />
      <span className="hidden md:block">Salir</span>
    </button>
  );
}