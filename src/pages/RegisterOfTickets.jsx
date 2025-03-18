import { usePdf } from "../hooks/usePdf";
import { useRegisterOfTickets } from "../hooks/useRegisterOfTickets"
import { useSaveOfTickets } from "../hooks/useSaveOfTickets";

import ListOfCount from "../componets/AcountOfTickets";

const RegisterOfTickets = () => {

  const { tickets, register } = useRegisterOfTickets()
  const { saveOfTickets } = useSaveOfTickets()

  return (
    <>
      <header className="max-w-5xl py-20 md:py-24 mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-blu-ar-800 font-bold text-center uppercase mb-2">
          Configuración de Tickets
        </h1>
        <p className="text-lg max-w-2xl text-center mx-auto opacity-80">
        Bienvenido a la página de administración de tickets MikroTik. Aquí puedes registrar y gestionar los tickets relacionados con tu red MikroTik.
        </p>
      </header>
      {
        !tickets ?
          (
            <form onSubmit={register} className="grid gap-4 max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl font-semibold opacity-80 uppercase px-1 md:px-4 mb-2">Configuración</h2>

              <div className="flex flex-col px-1 md:px-4">
                <label htmlFor="zeller" className="font-semibold indent-2">Vendedor</label>
                <input className="bg-blu-ar-700/5 text-blu-ar-900 placeholder:text-blu-ar-800 rounded-md py-2 px-4" name="zeller" type="text" placeholder="Adrianfer" />
              </div>
              <div className="flex flex-col px-1 md:px-4">
                <label htmlFor="server" className="font-semibold indent-2">Servidor</label>
                <input className="bg-blu-ar-700/5 text-blu-ar-900 placeholder:text-blu-ar-800 rounded-md py-2 px-4" name="server" type="text" placeholder="Wifi Por Hora" />
              </div>
              <div className="flex flex-col px-1 md:px-4">
                <label htmlFor="title" className="font-semibold indent-2">Titulo</label>
                <input className="bg-blu-ar-700/5 text-blu-ar-900 placeholder:text-blu-ar-800 rounded-md py-2 px-4" name="title" type="text" placeholder="Wifi Por Hora" />
              </div>
              <div className="flex flex-col px-1 md:px-4">
                <label htmlFor="profile" className="font-semibold indent-2">Perfil</label>
                <input className="bg-blu-ar-700/5 text-blu-ar-900 placeholder:text-blu-ar-800 rounded-md py-2 px-4" name="profile" type="text" placeholder="1hr" />
              </div>
              <div className="flex flex-col px-1 md:px-4">
                <label htmlFor="uptime" className="font-semibold indent-2">Tiempo</label>
                <input className="bg-blu-ar-700/5 text-blu-ar-900 placeholder:text-blu-ar-800 rounded-md py-2 px-4" name="uptime" type="text" placeholder="01:00:00" />
              </div>
              <ListOfCount />

              <button type="submit" className="w-full max-w-md bg-blu-ar-700 text-lemon-ar-600 hover:bg-lemon-ar-600 hover:text-blu-ar-700 hover:shadow-sm hover:shadow-lemon-ar-600 rounded uppercase  font-bold py-2 px-16 mt-6 mx-auto transition ease-in-out delay-150">Registrar</button>
            </form>
          )
          :

          <form className="grid gap-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center">Configuracion Registrada</h2>
            <div className="grid grid-cols-4 gap-2 text-center mb-2">
              <h4 className="uppercase">Servidor: <i className="font-semibold">{tickets.server}</i></h4>
              <h4 className="uppercase">Perfil: <i className="font-semibold">{tickets.profile}</i></h4>
              <h4 className="uppercase">Tiempo: <i className="font-semibold">{tickets.uptime}</i></h4>
              <h4 className="uppercase">Cantidad: <i className="font-semibold">{tickets.codes.length}</i></h4>
            </div>
            <div className="grid gap-4">
              <h4 className="font-semibold uppercase indent-2">Codigos</h4>
              <ul className="grid gap-2 grid-cols-8">
                {
                  tickets.codes?.map(({ code }) => (
                    <li key={code} className="bg-slate-200 list-none text-center p-2">{code}</li>
                  ))
                }
              </ul>
            </div>
            <button onClick={() => saveOfTickets(tickets)} type="button" className="w-full max-w-md bg-blu-ar-700 text-lemon-ar-600 hover:bg-lemon-ar-600 hover:text-blu-ar-700 hover:shadow-sm hover:shadow-lemon-ar-600 rounded uppercase  font-bold py-2 px-16 mt-6 mx-auto transition ease-in-out delay-150">Guardar</button>
          </form>
      }
    </>
  )
}

export default RegisterOfTickets