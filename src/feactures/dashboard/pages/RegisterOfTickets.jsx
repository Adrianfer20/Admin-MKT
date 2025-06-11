// pages/RegisterOfTickets.jsx
import { useRegisterOfTickets } from "../hooks/useRegisterOfTickets"
import { useSaveOfTickets } from "../hooks/useSaveOfTickets"
import RegisterForm from "../components/RegisterForm"
import TicketsSummary from "../components/TicketsSummary"
import { obtenerUnTicket } from "../../../config/test.firebase"

const RegisterOfTickets = () => {
  const { tickets, register } = useRegisterOfTickets()
  const { saveOfTickets } = useSaveOfTickets()

  return (
    <>
      <header className="bg-biscay-800 text-white px-8 py-12 md:py-20 mb-12 rounded-br-[100px] shadow-md">
        <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">
          Configuración de Tickets
        </h1>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl">
          Bienvenido a la página de administración de tickets MikroTik. Aquí puedes registrar y gestionar los tickets relacionados con tu red.
        </p>

        <button onClick={obtenerUnTicket}>Ejecutar</button>
      </header>

      {!tickets ? (
        <RegisterForm onSubmit={register} />
      ) : (
        <TicketsSummary tickets={tickets} onSave={saveOfTickets} />
      )}
    </>
  )
}

export default RegisterOfTickets
