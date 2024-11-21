import { Link } from 'react-router-dom'
import { NavBar } from './NavBar/NavBar'
import logo from '@assets/logo.png'
import { Flex, Layout } from 'antd'

export const Header: React.FC = () => {
  const { Header } = Layout
  return (
    <Header style={{ backgroundColor: '#242424' }}>
      <Flex align='center' gap='large' className={'p-2'}>
        <Link to={'/sql-helper'}>
          <img className='w-24' src={logo} />
        </Link>
        <NavBar />
      </Flex>
    </Header>
  )
}
