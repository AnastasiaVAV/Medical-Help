import LoginButton from './LoginButton'
import useAuth from '../hooks/useAuth'
import ContactsLink from './ContactsLink'

const getFirstName = (name?: string) => {
  if (!name) return 'Пользователь'
  return name.split(' ')[0]
}

const ProfilePage = () => {
  const { userData } = useAuth()
  const userName = getFirstName(userData?.name)

  return (
    <section className="container profile">
      <div className="container__header profile__info">
        <h1 className="profile__title">{`Привет, ${userName}`}</h1>
        <div className="profile__links">
          <LoginButton classes="button button-small button-fill" logoutText="Выйти из аккаунта" />
          <ContactsLink classes="button button-small" text="Перейти в контакты" />
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
