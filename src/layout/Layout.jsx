import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom'
import Nav from '../shared/componets/Nav';
import Footer from '../shared/componets/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col text-biscay-900 bg-biscay-50 print:hidden">
      <Nav />
      <main className="flex-grow w-full mx-auto">
        <Outlet />
        <Toaster position="bottom-center" />
      </main>
      <Footer />
    </div>
  )
}
