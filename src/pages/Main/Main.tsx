import { routesToPage } from '@entities/constants/constants'
import { MainNavItem } from '@shared/Main/MainNavItem/MainNavItem'
import { Flex } from 'antd'
import { Typography } from 'antd'

export const Main: React.FC = () => {
  return (
    <Flex justify='center' align='center' className={'w-full h-full p-4'} vertical>
      <Typography.Title level={1} style={{ color: 'white' }}>
        Your assistant for clients with various SQL GUI:
      </Typography.Title>
      <Flex className={"m-0 w-full"}>
        {routesToPage.map((link, index) => (
          <MainNavItem key={index} toPage={link.path} name={link.name} />
        ))}
      </Flex>
    </Flex>
  )
}
