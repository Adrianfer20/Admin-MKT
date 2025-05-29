import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { useAuth } from "../../context/AuthContext";

import { FiHome, FiLogOut, FiPlusSquare, FiLogIn } from "react-icons/fi";

export default function Nav() {
  const { user, logout } = useAuth();

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded transition-all uppercase font-semibold text-sm ${isActive
      ? "bg-lemon-ar-600 text-blu-ar-700 shadow-sm shadow-lemon-ar-600"
      : "hover:bg-lemon-ar-600 hover:text-blu-ar-700 hover:shadow-sm hover:shadow-lemon-ar-600"
    }`



  return (
    <nav className="w-full sticky flex items-center justify-between bg-blu-ar-700 text-lemon-ar-50 shadow-md py-2 px-6 z-50">
      <span className="font-bold uppercase text-lg">
        <Logo />
      </span>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <NavLink to="/dashboard" end className={linkClass}>
              <FiHome className="text-lg" />
              <span className="hidden md:block">Inicio</span>
            </NavLink>

            <NavLink to="/crear-tickets" className={linkClass}>
              <FiPlusSquare className="text-lg" />
              <span className="hidden md:block">Crear Tickets</span>
            </NavLink>

            <button
              onClick={logout}
              className="flex items-center gap-1 px-3 py-2 rounded uppercase font-semibold text-sm hover:bg-lemon-ar-600 hover:text-blu-ar-700 hover:shadow-sm hover:shadow-lemon-ar-600 transition-all"
            >
              <FiLogOut className="text-lg" />
              <span className="hidden md:block">Salir</span>
            </button>
          </>
        ) : (
          <NavLink to="/" end className={linkClass}>
            <FiLogIn className="text-lg" />
            Iniciar sesión
          </NavLink>
        )}
      </div>
    </nav>
  );
}
