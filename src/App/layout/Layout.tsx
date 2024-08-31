import { Outlet } from 'react-router-dom'
import { Header } from '../../shared/Header/Header'

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
