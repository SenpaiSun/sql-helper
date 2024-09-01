import { routesToPage } from '@entities/constants/constants'
import { MainNavItem } from '@shared/Main/MainNavItem/MainNavItem'
import { Flex } from 'antd'
import { Typography } from 'antd'

export const Main: React.FC = () => {
  return (
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
  )
}
