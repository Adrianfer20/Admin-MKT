import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { useLogin } from '../hooks/useLogin'

export default function Login() {
  const { data, setter } = useForm({ email: '', password: '' })
  const { login, loading, error } = useLogin()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await login(data)
    if (res.success) {
      navigate('/dashboard')
    }
  }

  return (
    <section className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-6"
      >
        <h1 className="text-3xl text-center font-bold uppercase text-blu-ar-950">
          Iniciar Sesión
        </h1>

        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium text-blu-ar-950">
            Usuario
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@email.com"
            onChange={setter}
            required
            className="mt-1 border-2 border-blu-ar-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lemon-ar-600"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="font-medium text-blu-ar-950">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="••••••"
            onChange={setter}
            required
            className="mt-1 border-2 border-blu-ar-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lemon-ar-600"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blu-ar-100 text-blu-ar-950 font-semibold rounded-md p-2 uppercase transition hover:bg-lemon-ar-600 hover:text-blu-ar-700 hover:shadow-md ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Accediendo...' : 'Acceder'}
        </button>

        {error && (
          <p className="text-red-600 text-sm text-center mt-2">{error}</p>
        )}
      </form>
    </section>
  )
}
