// src/features/auth/services/authService.js
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../config/firebase.config"

export const loginUser = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return { success: true, user: userCredential.user }
  } catch (error) {
    return { success: false, error: error.message }
  }
}
