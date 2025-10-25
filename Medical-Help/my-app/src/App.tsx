import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, type ReactNode } from 'react'
import './App.css'

import AuthProvider from './contexts/AuthContextProvider'
import useAuth from './hooks/useAuth'

import MainPage from './components/MainPage'
import HomePage from './components/HomePage'
import ProfilePage from './components/ProfilePage'
import ContactsPage from './components/ContactsPage'

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const { isLogin } = useAuth()

  useEffect(() => {
    if (!isLogin) {
      navigate('/')
    }
  }, [isLogin, navigate])

  return isLogin ? <>{children}</> : null
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />}></Route>
            <Route
              path="profile"
              element={(
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              )}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
