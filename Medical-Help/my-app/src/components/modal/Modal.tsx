import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Portal from './modalPortal'

import useAuth from '../../hooks/useAuth'
import usersData from '../../users.json'

interface ModalProps {
  onClose: () => void
}

interface LoginFormData {
  login: string
  password: string
}

const schema = yup.object({
  login: yup.string().required('Обязательное поле'),
  password: yup.string().min(8, 'Минимум 8 символов').required('Обязательное поле'),
})

const Modal = ({ onClose }: ModalProps) => {
  const navigate = useNavigate()
  const { logIn } = useAuth()
  const [authError, setAuthError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const onSubmit = (data: LoginFormData) => {
    const userExists = usersData.find(
      user => user.login === data.login && user.password === data.password,
    )

    if (userExists) {
      setAuthError('')
      logIn(userExists)
      onClose()
      navigate('/profile')
    }
    else {
      setAuthError('Неверный логин или пароль')
    }
  }

  return (
    <Portal>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <button className="button modal__button-close" onClick={onClose}>×</button>
          <h2 className="modal__title">Войти</h2>

          <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="modal__form-input">
              <input
                className={`modal__input ${errors.login && 'modal__input-error'}`}
                placeholder="Логин"
                {...register('login')}
              />
              <p className={`modal__form-text ${errors.login ? 'modal__form-error' : 'modal__form-info'}`}>
                {errors.login?.message || 'Обязательное поле'}
              </p>
            </div>

            <div className="modal__form-input">
              <input
                className={`modal__input ${errors.password && 'modal__input-error'}`}
                type="password"
                placeholder="Пароль"
                {...register('password')}
              />
              <p className={`modal__form-text ${errors.password ? 'modal__form-error' : 'modal__form-info'}`}>
                {errors.password?.message || 'Обязательное поле. Минимум 6 символов'}
              </p>
            </div>

            {authError && (
              <p className="modal__form-text modal__form-error">
                {authError}
              </p>
            )}

            <button
              className="button button-small button-fill"
              type="submit"
              disabled={!isValid}
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    </Portal>
  )
}

export default Modal
