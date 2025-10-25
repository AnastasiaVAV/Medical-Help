import { useState } from 'react'
import AuthContext from './AuthContext'
import type UserData from '../interfaces/UserData'

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false)

  const storedUser = localStorage.getItem('user')
  const userData: UserData | null = storedUser ? JSON.parse(storedUser) : null

  const logIn = (userData: UserData) => {
    setIsLogin(true)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const logOut = () => {
    setIsLogin(false)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ isLogin, userData, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
