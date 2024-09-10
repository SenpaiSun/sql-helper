import { Flex } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Content } from 'antd/es/layout/layout'


export const InHelper: React.FC = () => {
  return (
    <Content style={{ minHeight: '78vh' }}>
      <Flex>
        <TextArea style={{ minHeight: '30vh', width: '30%', resize: 'none' }}></TextArea>
        <TextArea style={{ minHeight: '30vh', width: '30%', resize: 'none' }} disabled></TextArea>
      </Flex>
    </Content>
  )
}
