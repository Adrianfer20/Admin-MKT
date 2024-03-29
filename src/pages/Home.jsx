//Hooks
import useGetApi from "../hooks/useGetApi";
import { useCDM } from "../hooks/useCMD";
import { usePdf } from "../hooks/usePdf";

//Functions
import { removeClassAnimation } from "../funtions/animations";


export default function Home(){
  const tickets = useGetApi()
  const { printPDF } = usePdf();
  const { copyCMD } = useCDM();

  const storedItemId = localStorage.getItem("itemId");

  removeClassAnimation(tickets)


  return (
    <>
      <header className="pt-40 pb-28">
        <h1 className="text-4xl font-bold uppercase mb-2">
          Registro de Tickets
        </h1>
        <p className="text-xl max-w-2xl ">
          Bienvenido a la página de administración de tickets MikroTik. Aquí
          puedes registrar y gestionar los tickets relacionados con tu red
          MikroTik.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Lista de Códigos</h2>
        <ul className="flex flex-col gap-2">
  {tickets?.map((ticket, index) => (
    <li
      key={ticket.id}
      className={`flex items-center justify-between px-2 py-1 rounded ${
        ticket.id === storedItemId ? "animacion" : ""
      }`}
    >
      <div>
      Perfil {ticket.profile} -  {ticket.id.slice(0,4)} {tickets.length - index} - {ticket.codes.length} tickets - {ticket.date} <strong className="uppercase">{ticket.zeller}</strong>
      </div> 
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => printPDF(ticket)}
          className="bg-blu-ar-200 text-blu-ar-900 hover:bg-blu-ar-400 text-sm uppercase rounded-md py-2 px-4"
        >
          Imprimir
        </button>
        <button
          type="button"
          onClick={() => copyCMD(ticket)}
          className="bg-blu-ar-200 text-blu-ar-900 hover:bg-blu-ar-400 text-sm uppercase rounded-md py-2 px-4"
        >
          CMD
        </button>
      </div>
    </li>
  ))}
</ul>
      </section>
    </>
  );
};

