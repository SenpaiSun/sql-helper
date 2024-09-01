import { Flex, Typography } from 'antd'
import { Link } from 'react-router-dom'

interface PropsMainNavItem {
  toPage: string
  name: string
}

export const MainNavItem = ({ toPage, name }: PropsMainNavItem) => {
  return (
    <Link to={toPage} className='hover:opacity-80'>
      <Flex justify='center' align='center' gap={'small'}>
        <span className='text-5xl bg-gradient-to-r from-yellow-300 via-blue-500 to-red-500 bg-size-300 text-transparent bg-clip-text animate-pulse'>&#187;&#187;&#187;</span>
        <Typography.Title level={2} style={{ color: 'white', margin: 0, marginTop: '0.5rem' }}>
          {name}
        </Typography.Title>
        <span className='text-5xl bg-gradient-to-l from-red-500 via-blue-500 to-yellow-300 bg-size-300 text-transparent bg-clip-text animate-pulse'>&#171;&#171;&#171;</span>
      </Flex>
    </Link>
  )
}
