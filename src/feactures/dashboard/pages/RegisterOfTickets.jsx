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
      <header className="max-w-5xl py-20 md:py-24 mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-blu-ar-800 font-bold uppercase mb-4">
          Configuración de Tickets
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700 opacity-80">
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
