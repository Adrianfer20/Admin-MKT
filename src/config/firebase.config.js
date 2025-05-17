// src/config/firebase.js
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCOtVwlnAdGDJY0o8SRHHdLJwaotRaaN4s",
  authDomain: "admin-mkt-5436e.firebaseapp.com",
  projectId: "admin-mkt-5436e",
  storageBucket: "admin-mkt-5436e.appspot.com",
  messagingSenderId: "899521384256",
  appId: "1:899521384256:web:0f20f354eb2d369eb4b4a5"
}

// Inicializa Firebase
const app = initializeApp(firebaseConfig)

// 🟢 Inicializa y exporta el módulo de autenticación
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);




