import { Outlet } from 'react-router-dom'
import Header from './Header'

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainPage
