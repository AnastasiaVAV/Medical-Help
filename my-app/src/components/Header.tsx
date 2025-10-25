import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import LoginButton from './LoginButton'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/" className="header__logo-link" aria-label="На главную страницу">
          <img className="header__logo-img" src={logo} alt="Логотип" />
        </NavLink>
      </div>
      <div className="header__menu">
        <ul className="header__menu-list" aria-label="Основное меню">
          <li className="header__menu-list-item">
            <NavLink to="/contacts" className="header__menu-list-link">
              Контакты
            </NavLink>
          </li>
          <li className="header__menu-list-item">
            <LoginButton classes="button button-big" />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
