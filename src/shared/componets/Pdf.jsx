// eslint-disable-next-line react/prop-types
export function PDF({tickets}) {
    // eslint-disable-next-line react/prop-types
    const {server, profile, title, codes} = tickets
    return (
         <div id="print" className="min-h-screen bg-slate-100 text-slate-900 hidden">
            <h2 className="text-2xl font-bold text-center">Configuracion Registrada</h2>
            <div className="mb-6">
              <h4 className="uppercase">Servidor: <i className="font-semibold">{server}</i></h4>
              <h4 className="uppercase">Perfil: <i className="font-semibold">{profile}</i></h4>
              <h4 className="uppercase">Titulo: <i className="font-semibold">{title}</i></h4>
            </div>
            <div className="grid gap-4">
              <h4 className="font-semibold uppercase">Codigos:</h4>
              <ul className="grid gap-2 grid-cols-6">
                {
                  // eslint-disable-next-line react/prop-types
                  codes?.map(({code}) => (
                    <li key={code} className="text-4xl font-semibold bg-slate-200 list-none text-center  col-span-1 p-2">{code}</li>
                  ))
                }
              </ul>
            </div>
            </div> 
    )
}