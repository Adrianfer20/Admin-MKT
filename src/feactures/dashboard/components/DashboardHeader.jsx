export default function DashboardHeader() {
  return (
    <header className="bg-biscay-800 text-white px-8 py-12 md:py-20 mb-12 rounded-br-[100px] shadow-md">
      <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">Registro de Tickets</h1>
      <p className="text-base md:text-lg text-gray-300 max-w-2xl">
        Bienvenido a la administración de tickets MikroTik. Registra y gestiona tus tickets de forma sencilla.
      </p>
    </header>
  );
}
