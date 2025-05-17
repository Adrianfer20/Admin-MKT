import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom'
import Nav from '../shared/componets/Nav';
import Footer from '../shared/componets/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col text-blu-ar-950 print:hidden">
      <Nav />
      <main className="flex-grow w-full px-6 lg:px-16 mx-auto">
        <Outlet />
        <Toaster position="bottom-center" />
      </main>
      <Footer />
    </div>
  )
}
