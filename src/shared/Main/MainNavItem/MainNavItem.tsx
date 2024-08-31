import { Divider } from 'antd'
import { Link } from 'react-router-dom'

interface PropsMainNavItem {
  toPage: string
  name: string
}

export const MainNavItem = ({ toPage, name }: PropsMainNavItem) => {
  return (
    <Divider>
      <Link to={toPage}>
        <span className='text-5xl bg-gradient-to-r from-yellow-300 via-blue-500 to-red-500 bg-size-300 text-transparent bg-clip-text animate-pulse'>&#187;&#187;&#187;</span>
        <Link to={toPage} className='text-3xl m-2'>{name}</Link>
        <span className='text-5xl bg-gradient-to-l from-red-500 via-blue-500 to-yellow-300 bg-size-300 text-transparent bg-clip-text animate-pulse'>&#171;&#171;&#171;</span>
      </Link>
    </Divider>
  )
}
