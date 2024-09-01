import { Footer } from '@shared/Footer/Footer'
import { Header } from '@shared/Header/Header'
import { Outlet } from 'react-router-dom'


export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
