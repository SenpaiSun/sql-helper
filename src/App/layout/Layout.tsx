import { Outlet } from 'react-router-dom'
import { Main } from '../../pages/Main/Main'

export const Layout = () => {
  return (
    <>
      <Main />
      <Outlet />
    </>
  )
}
