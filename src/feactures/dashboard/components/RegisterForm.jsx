// components/RegisterForm.jsx
import ListOfCount from "../../../shared/componets/AcountOfTickets"

const RegisterForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="grid gap-6 max-w-3xl mx-auto px-4">
      <fieldset className="grid gap-4">
        <legend className="text-xl font-semibold uppercase text-biscay-700">Datos del Ticket</legend>

        {[
          { id: 'zeller', label: 'Vendedor', placeholder: 'Adrianfer' },
          { id: 'server', label: 'Servidor', placeholder: 'Wifi Por Hora' },
          { id: 'title', label: 'Título', placeholder: 'Wifi Por Hora' },
          { id: 'profile', label: 'Perfil', placeholder: '1hr' },
          { id: 'uptime', label: 'Tiempo', placeholder: '01:00:00' }
        ].map(({ id, label, placeholder }) => (
          <div key={id} className="flex flex-col">
            <label htmlFor={id} className="font-semibold">{label}</label>
            <input
              id={id}
              name={id}
              type="text"
              placeholder={placeholder}
              required
              className="input-style"
            />
          </div>
        ))}
      </fieldset>

      <ListOfCount />

      <button type="submit" className="btn-primary">Registrar</button>
    </form>
  )
}

export default RegisterForm
