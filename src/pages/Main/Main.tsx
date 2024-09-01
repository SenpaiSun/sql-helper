import { routesToPage } from '@entities/constants/constants'
import { MainNavItem } from '@shared/Main/MainNavItem/MainNavItem'
import { Flex } from 'antd'
import { Typography, Layout } from 'antd'

export const Main: React.FC = () => {
  const {Content} = Layout
  return (
    <Content style={{ backgroundColor: '#242424', minHeight: '78vh' }}>
      <Flex className={'w-full h-full p-4'} align="center" vertical>
      <Typography.Title level={1} style={{ color: 'white' }}>
      Your assistant to work as a technical support engineer:
      </Typography.Title>
      <Flex vertical className={"m-0 "} align="center" gap="large">
        {routesToPage.map((link, index) => (
          <MainNavItem key={index} toPage={link.path} name={link.name} />
        ))}
      </Flex>
    </Flex>
    </Content>
  )
}
