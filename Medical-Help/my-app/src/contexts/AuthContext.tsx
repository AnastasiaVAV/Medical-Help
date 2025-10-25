import { createContext } from 'react'
import type UserData from '../interfaces/UserData'

interface AuthContextType {
  isLogin: boolean
  userData: UserData | null
  logIn: (userData: UserData) => void
  logOut: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export default AuthContext
