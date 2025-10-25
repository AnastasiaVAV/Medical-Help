import { useState } from 'react'
import Modal from './modal/Modal'
import useAuth from '../hooks/useAuth'

interface LoginButtonProps {
  classes: string
  loginText?: string
  logoutText?: string
}

const LoginButton = ({ classes, loginText = 'Войти', logoutText = 'Выйти' }: LoginButtonProps) => {
  const { isLogin, logOut } = useAuth()
  const [isModalOpen, setIsOpenModal] = useState(false)

  const handleLogout = () => {
    logOut()
  }

  const openModal = () => setIsOpenModal(true)
  const closeModal = () => setIsOpenModal(false)

  return (
    <>
      {!isLogin
        ? (
            <button
              onClick={openModal}
              className={classes}
              aria-label={loginText}
            >
              {loginText}
            </button>
          )
        : (
            <button
              onClick={handleLogout}
              className={classes}
              aria-label={logoutText}
            >
              {logoutText}
            </button>
          )}
      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  )
}

export default LoginButton
