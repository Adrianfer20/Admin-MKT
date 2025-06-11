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
    <section style={{background: 'linear-gradient(180deg,rgba(31, 42, 104, 1) 0%, rgba(31, 42, 104, 1) 40%, rgba(202, 207, 239, 1) 40%)' }} className="flex items-center justify-center min-h-[60vh] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white px-8 py-12 space-y-6 rounded-xl shadow-md"
      >
        <h1 className="text-biscay-800 text-center text-3xl font-bold uppercase mb-6">
          Iniciar Sesión
        </h1>

        {/* Campo Email */}
        <div className="flex flex-col relative">
          <label htmlFor="email" className="font-medium text-biscay-900 mb-1">
            Email
          </label>
          <div className="flex items-center border-2 border-biscay-100 rounded-md p-2 focus-within:ring-2 focus-within:ring-lemon-ar-600">
            <FiMail className="text-gray-500 mr-2" />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
              onChange={setter}
              required
              className="w-full outline-none bg-transparent text-biscay-900"
            />
          </div>
        </div>

        {/* Campo Password */}
        <div className="flex flex-col relative">
          <label htmlFor="password" className="font-medium text-biscay-900 mb-1">
            Contraseña
          </label>
          <div className="flex items-center border-2 border-biscay-100 rounded-md p-2 focus-within:ring-2 focus-within:ring-lemon-ar-600">
            <FiLock className="text-gray-500 mr-2" />
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="••••••"
              onChange={setter}
              required
              className="w-full outline-none bg-transparent text-biscay-900"
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
          className={`w-full bg-biscay-800 text-white font-semibold rounded-md p-2 uppercase transition hover:bg-lemon-ar-600 hover:text-biscay-700 hover:shadow-md ${
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
