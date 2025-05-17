// src/features/auth/hooks/useLogin.js
import { useState } from "react"
import { loginUser } from "../services/authServices"

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const login = async (data) => {
    setLoading(true)
    setError(null)

    const response = await loginUser(data)

    if (!response.success) setError(response.error)

    setLoading(false)
    return response
  }

  return { login, loading, error }
}
