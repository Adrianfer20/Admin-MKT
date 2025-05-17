// src/shared/hooks/useForm.js
import { useState } from "react"

export const useForm = (initialValues = {}) => {
  const [data, setData] = useState(initialValues)

  const setter = (e) => {
    const { name, value } = e.target
    setData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return {
    data,
    setter,
    setData // opcional: por si quieres modificarlo manualmente
  }
}
