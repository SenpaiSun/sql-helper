import { routesToPage } from '@entities/constants/constants'
import { Flex } from 'antd'
import { NavItem } from './NavItem/NavItem'

export const NavBar = () => {
  return (
    <Flex gap="middle" align="center">
      {routesToPage.map((link) => (
        <NavItem key={link.name} toPage={link.path} name={link.name} />
      ))}
    </Flex>
  )
}
