import { FiHome, FiPlusSquare, FiLogIn } from "react-icons/fi";

import { useAuth } from "../../context/AuthContext";
import { Logo } from "./Logo";

import { LogoutButton } from "./LogoutButton";
import { NavLinkButton } from "./NavLinkButton";


export default function Nav() {
  const { user, logout } = useAuth();

  return (
    <nav className="w-full sticky flex items-center justify-between bg-biscay-800 py-4 px-6 shadow-md z-50">

      <span className="font-bold uppercase text-lg">
        <Logo />
      </span>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <NavLinkButton to="/dashboard" icon={FiHome} label="Inicio" end />
            <NavLinkButton to="/crear-tickets" icon={FiPlusSquare} label="Crear Tickets" />

            <LogoutButton onClick={logout} />
          </>
        ) : (
          <NavLinkButton to="/" icon={FiLogIn} label="Iniciar sesión" end />
        )}
      </div>
    </nav>
  );
}
