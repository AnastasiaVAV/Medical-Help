import LoginButton from './LoginButton'

import cardiogram from '../assets/cardiogram.svg'
import stethoscope from '../assets/stethoscope.svg'
import medicalHistory from '../assets/medical-history.svg'
import ContactsLink from './ContactsLink'

interface Article {
  title: string
  description: string
  icon: string
}

type Articles = Article[]

const articles: Articles = [
  { title: 'Онлайн-прием', description: 'Рыба текст', icon: cardiogram },
  { title: 'Экстренный Случай', description: 'Рыба текст', icon: stethoscope },
  { title: 'Лечение рака', description: 'Рыба текст', icon: medicalHistory },
]

const AdvantagesArticle = ({ article }: { article: Article }) => {
  const { title, description, icon } = article
  return (
    <article className="advantages__article">
      <div className="advantages__article-header">
        <h5 className="advantages__article-title">{title}</h5>
        <div className="advantages__article-icon">
          <img src={icon} alt={title} />
        </div>
      </div>
      <p>{description}</p>
    </article>
  )
}

const HomePage = () => {
  return (
    <section className="container banner">
      <div className="banner__header">
        <h1 className="banner__title">
          Место для получения
          <br />
          {' '}
          медицинской помощи
        </h1>
        <div className="banner__links">
          <LoginButton classes="button button-small button-fill" />
          <ContactsLink classes="button button-small" />
        </div>
      </div>
      <div className="banner__advantages">
        {articles.map(article => <AdvantagesArticle key={article.title} article={article} />)}
      </div>
    </section>
  )
}

export default HomePage
