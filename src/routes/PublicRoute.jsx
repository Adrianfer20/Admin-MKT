import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext' // o la ruta donde tengas tu contexto

export default function PublicRoute({ children }) {
  const { user, loadingAuth } = useAuth()

  if (loadingAuth) return <p className="text-center mt-10">Cargando...</p>

  return user ? <Navigate to="/dashboard" /> : children
}
