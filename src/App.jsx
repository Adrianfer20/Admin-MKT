// Importa los componentes necesarios de react-router-dom y react-hot-toast.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

// Importa los estilos CSS.
import "./css/main.css"
import "./css/animacion.css"

// Importa las páginas que se mostrarán en la aplicación.
import RegisterOfTickets from "./pages/RegisterOfTickets"
import Home from "./pages/Home"

// Importar componentes que se mostraran en la aplicacion
import Nav from "./componets/Nav"
import Footer from "./componets/Footer";

// Componente principal de la aplicación.
export default function App() {
  return (
    // Configura el enrutador BrowserRouter.
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-between text-blu-ar-950 print:hidden">

        {/* Renderiza el componente de navegación y las rutas de la aplicación. */}
        <Nav />
        <div className="w-full flex-grow px-6 lg:px-16 mx-auto">
          <Routes>
            <Route path="/Admin-MKT/" element={<Home />} />
            <Route path="/Admin-MKT/crear-tickets" element={<RegisterOfTickets />} />
          </Routes>

          {/* Agrega un componente Toast para mostrar notificaciones en la parte inferior del centro. */}
          <Toaster position="bottom-center"/>
        </div>

        <Footer />
      </div>
    </Router>
  );
}






