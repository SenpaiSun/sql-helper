import { Link } from 'react-router-dom'
import { NavBar } from './NavBar/NavBar'
import logo from '@assets/logo.png'
import { Flex } from 'antd'

export const Header: React.FC = () => {
  return (
    <header className='m-2 w-full'>
      <Flex gap="large">
        <Link to={'/'}>
          <img className='w-24' src={logo} />
        </Link>
        <NavBar />
      </Flex>
    </header>
  )
}
