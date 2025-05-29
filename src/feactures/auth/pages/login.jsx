import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import { useForm } from '../hooks/useForm'
import { useLogin } from '../hooks/useLogin'

export default function Login() {
  const { data, setter } = useForm({ email: '', password: '' })
  const { login, loading, error } = useLogin()
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await login(data)
    if (res.success) {
      navigate('/dashboard')
    }
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md"
      >
        <h1 className="text-3xl text-center font-bold uppercase text-blu-ar-950">
          Iniciar Sesión
        </h1>

        {/* Campo Email */}
        <div className="flex flex-col relative">
          <label htmlFor="email" className="font-medium text-blu-ar-950 mb-1">
            Usuario
          </label>
          <div className="flex items-center border-2 border-blu-ar-100 rounded-md p-2 focus-within:ring-2 focus-within:ring-lemon-ar-600">
            <FiMail className="text-gray-500 mx-2" />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
              onChange={setter}
              required
              className="w-full outline-none bg-transparent text-blu-ar-950"
            />
          </div>
        </div>

        {/* Campo Password */}
        <div className="flex flex-col relative">
          <label htmlFor="password" className="font-medium text-blu-ar-950 mb-1">
            Contraseña
          </label>
          <div className="flex items-center border-2 border-blu-ar-100 rounded-md p-2 focus-within:ring-2 focus-within:ring-lemon-ar-600">
            <FiLock className="text-gray-500 mr-2" />
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="••••••"
              onChange={setter}
              required
              className="w-full outline-none bg-transparent text-blu-ar-950"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-gray-500 ml-2 focus:outline-none"
              tabIndex={-1}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Botón de Acceso */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blu-ar-100 text-blu-ar-950 font-semibold rounded-md p-2 uppercase transition hover:bg-lemon-ar-600 hover:text-blu-ar-700 hover:shadow-md ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Accediendo...' : 'Acceder'}
        </button>

        {/* Mensaje de error */}
        {error && (
          <p className="text-red-600 text-sm text-center mt-2">{error}</p>
        )}
      </form>
    </section>
  )
}
