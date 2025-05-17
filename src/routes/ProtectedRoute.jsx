// src/routes/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }) {
  const { user, loadingAuth } = useAuth()

  if (loadingAuth) return <p className="text-center mt-10">Cargando...</p>

  return user ? children : <Navigate to="/Admin-MKT/" />
}
