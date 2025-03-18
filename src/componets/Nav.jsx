import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "./Logo";

// Componente de navegación.
function Nav() {
  return (
    // Renderiza la barra de navegación con un logo y enlaces a las páginas.
    <nav className="w-full sticky flex items-center justify-between bg-blu-ar-700 text-lemon-ar-50 shadow-md py-1 px-6">
      <span className="font-bold uppercase ">
        <Logo/>
      </span>
      <ul className="flex items-center justify-around font-semibold gap-4">
        {/* Enlace a la página de inicio */}
          <Link className="hover:bg-lemon-ar-600 hover:text-blu-ar-700 hover:shadow-sm hover:shadow-lemon-ar-600 rounded p-2 uppercase transition ease-in-out delay-150" to="/Admin-MKT/">Inicio</Link>
        
        {/* Enlace a la página de crear tickets */}
          <Link className="hover:bg-lemon-ar-600 hover:text-blu-ar-700 hover:shadow-sm hover:shadow-lemon-ar-600 rounded p-2 uppercase transition ease-in-out delay-150" to="/Admin-MKT/crear-tickets">Crear Tickets</Link>
      </ul>
    </nav>
  )
}


export default Nav;
