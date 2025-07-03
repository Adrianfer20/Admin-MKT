import { useState } from "react"
import { FaSave } from "react-icons/fa"

// components/TicketsSummary.jsx
const TicketsSummary = ({ tickets, onSave }) => {

  const [loading, setLoading] = useState(false)

  const handleSave = async () => {
    setLoading(true)
    try {
      await onSave(tickets)
    } catch (error) {
      console.error("Error al guardar los tickets:", error)
      setLoading(false)
    } 
  }

  return (
    <section className="max-w-2xl px-4 md:px-8 mx-auto">
      <h2 className="grid md:inline-block bg-biscay-800 text-white text-md md:text-xl text-center md:text-left font-semibold uppercase rounded-3xl px-6 py-2 mb-4">Configuración Registrada</h2>

      <div className="bg-white p-4 rounded-lg grid gap-6 max-w-3xl mx-auto px-4 shadow-md mb-6">
        <p><strong>Servidor:</strong> {tickets.server}</p>
        <p><strong>Perfil:</strong> {tickets.profile}</p>
        <p><strong>Tiempo:</strong> {tickets.uptime}</p>
        <p><strong>Cantidad:</strong> {tickets.codes.length}</p>
      </div>

      <div className="bg-white p-4 rounded-lg mb-6">
        <h4 className="font-semibold uppercase mb-2">Códigos</h4>
        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 max-h-[40vh] overflow-y-scroll">
          {tickets.codes.map(({ code }) => (
            <li key={code} className="bg-slate-100 text-center py-2 px-3 rounded shadow text-sm font-mono">
              {code}
            </li>
          ))}
        </ul>
      </div>

      <button type="button" onClick={handleSave}
        disabled={loading} className="btn-primary">
        {loading ? 'Guardando...' : (
          <>
            <span>Guardar</span>
            <FaSave />
          </>
        )}
      </button>
    </section>
  )
}

export default TicketsSummary
