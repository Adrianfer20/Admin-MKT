// src/routes/index.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../feactures/auth/pages/login'
import Dashboard from '../feactures/dashboard/pages/Dashboard'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import Layout from '../layout/Layout'
import RegisterOfTickets from '../feactures/dashboard/pages/RegisterOfTickets'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/Admin-MKT/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/Admin-MKT/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Admin-MKT/crear-tickets"
          element={
            <ProtectedRoute>
              <RegisterOfTickets/>
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
)
