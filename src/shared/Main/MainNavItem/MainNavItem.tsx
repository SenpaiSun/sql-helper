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
        {/* Левая стрелка с градиентом и анимацией */}
        <span className='text-5xl bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 bg-[length:300%_100%] text-transparent bg-clip-text animate-gradient-flow-left'>&#187;&#187;&#187;</span>
        {/* Текст */}
        <Typography.Title level={2} style={{ color: 'white', margin: 0, marginTop: '0.5rem' }}>
          {name}
        </Typography.Title>
        {/* Правая стрелка с зеркальным градиентом и анимацией */}
        <span className='text-5xl bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 bg-[length:300%_100%] text-transparent bg-clip-text animate-gradient-flow-right'>&#171;&#171;&#171;</span>
      </Flex>
    </Link>
  )
}
