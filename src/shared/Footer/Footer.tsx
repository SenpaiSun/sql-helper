import { Flex, Layout, Typography } from 'antd'
import { FooterContacts } from './FooterContacts/FooterContacts'

export const Footer: React.FC = () => {
  const { Footer } = Layout
  return (
    <Footer style={{ backgroundColor: '#242424' }}>
      <Flex justify='space-between'>
        <Typography.Text style={{ color: 'white' }}>© 2024</Typography.Text>
        <FooterContacts />
      </Flex>
    </Footer>
  )
}
