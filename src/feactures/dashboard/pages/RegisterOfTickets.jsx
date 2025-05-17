import { useRegisterOfTickets } from "../hooks/useRegisterOfTickets";
import { useSaveOfTickets } from "../hooks/useSaveOfTickets";
import ListOfCount from "../../../shared/componets/AcountOfTickets";

const RegisterOfTickets = () => {
  const { tickets, register } = useRegisterOfTickets();
  const { saveOfTickets } = useSaveOfTickets();

  return (
    <>
      <header className="max-w-5xl py-20 md:py-24 mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-blu-ar-800 font-bold uppercase mb-4">
          Configuración de Tickets
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700 opacity-80">
          Bienvenido a la página de administración de tickets MikroTik. Aquí puedes registrar y gestionar los tickets relacionados con tu red.
        </p>
      </header>

      {!tickets ? (
        <form onSubmit={register} className="grid gap-6 max-w-3xl mx-auto px-4">
          <fieldset className="grid gap-4">
            <legend className="text-xl font-semibold uppercase text-blu-ar-700">Datos del Ticket</legend>

            <div className="flex flex-col">
              <label htmlFor="zeller" className="font-semibold">Vendedor</label>
              <input
                id="zeller"
                name="zeller"
                type="text"
                placeholder="Adrianfer"
                required
                className="input-style"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="server" className="font-semibold">Servidor</label>
              <input
                id="server"
                name="server"
                type="text"
                placeholder="Wifi Por Hora"
                required
                className="input-style"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="title" className="font-semibold">Título</label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Wifi Por Hora"
                required
                className="input-style"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="profile" className="font-semibold">Perfil</label>
              <input
                id="profile"
                name="profile"
                type="text"
                placeholder="1hr"
                required
                className="input-style"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="uptime" className="font-semibold">Tiempo</label>
              <input
                id="uptime"
                name="uptime"
                type="text"
                placeholder="01:00:00"
                required
                className="input-style"
              />
            </div>
          </fieldset>

          <ListOfCount />

          <button
            type="submit"
            className="btn-primary"
          >
            Registrar
          </button>
        </form>
      ) : (
        <section className="grid gap-6 max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center uppercase text-blu-ar-700">Configuración Registrada</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base text-center">
            <p><strong>Servidor:</strong> {tickets.server}</p>
            <p><strong>Perfil:</strong> {tickets.profile}</p>
            <p><strong>Tiempo:</strong> {tickets.uptime}</p>
            <p><strong>Cantidad:</strong> {tickets.codes.length}</p>
          </div>

          <div>
            <h4 className="font-semibold uppercase mb-2">Códigos</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
              {tickets.codes?.map(({ code }) => (
                <li key={code} className="bg-slate-100 text-center py-2 px-3 rounded shadow text-sm font-mono">
                  {code}
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={() => saveOfTickets(tickets)}
            className="btn-primary"
          >
            Guardar
          </button>
        </section>
      )}
    </>
  );
};

export default RegisterOfTickets;
