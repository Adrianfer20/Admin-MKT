// components/TicketsSummary.jsx
const TicketsSummary = ({ tickets, onSave }) => {
  return (
    <section className="grid gap-6 max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center uppercase text-biscay-700">Configuración Registrada</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base text-center">
        <p><strong>Servidor:</strong> {tickets.server}</p>
        <p><strong>Perfil:</strong> {tickets.profile}</p>
        <p><strong>Tiempo:</strong> {tickets.uptime}</p>
        <p><strong>Cantidad:</strong> {tickets.codes.length}</p>
      </div>

      <div>
        <h4 className="font-semibold uppercase mb-2">Códigos</h4>
        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {tickets.codes.map(({ code }) => (
            <li key={code} className="bg-slate-100 text-center py-2 px-3 rounded shadow text-sm font-mono">
              {code}
            </li>
          ))}
        </ul>
      </div>

      <button type="button" onClick={() => onSave(tickets)} className="btn-primary">
        Guardar
      </button>
    </section>
  )
}

export default TicketsSummary
