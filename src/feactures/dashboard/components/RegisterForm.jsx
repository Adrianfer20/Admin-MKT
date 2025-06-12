// components/RegisterForm.jsx
import { FaArrowRight } from "react-icons/fa";
import ListOfCount from "../../../shared/componets/AcountOfTickets";

const FIELDS = [
  { id: "zeller", label: "Vendedor", placeholder: "Adrianfer" },
  { id: "server", label: "Servidor", placeholder: "Wifi Por Hora" },
  { id: "title", label: "Título", placeholder: "Wifi Por Hora" },
  { id: "profile", label: "Perfil", placeholder: "1hr" },
  { id: "uptime", label: "Tiempo", placeholder: "01:00:00" },
];

export default function RegisterForm({ onSubmit }) {
  return (
    <section className="max-w-2xl px-4 md:px-8 mx-auto">
      <h2 className="grid md:inline-block bg-biscay-800 text-white text-md md:text-xl text-center md:text-left font-semibold uppercase rounded-3xl px-6 py-2 mb-4">
        Configuración del Ticket
      </h2>

      <form
        onSubmit={onSubmit}
        className="bg-white p-6 md:p-8 rounded-xl grid gap-6 mx-auto shadow-md"
      >
        {/* Campos principales */}
        <fieldset className="grid gap-4">
          {FIELDS.map(({ id, label, placeholder }) => (
            <div key={id} className="flex flex-col">
              <label htmlFor={id} className="font-semibold text-sm mb-1 text-biscay-900">
                {label}
              </label>
              <input
                id={id}
                name={id}
                type="text"
                placeholder={placeholder}
                required
                className="input-style"
                minLength={1}
                defaultValue={["server", "title"].includes(id) ? "Wifi Por Hora" : ""}
              />
            </div>
          ))}
        </fieldset>

        {/* Lista de conteos */}
        <ListOfCount />

        {/* Botón de enviar */}
        <button type="submit" className="btn-primary flex items-center justify-center gap-2 mt-4">
          <span>Registrar</span>
          <FaArrowRight />
        </button>
      </form>
    </section>
  );
}
