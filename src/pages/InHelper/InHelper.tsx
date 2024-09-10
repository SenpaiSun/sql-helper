import { Button } from '@shared/Button/Button'
import { Flex } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Content } from 'antd/es/layout/layout'


export const InHelper: React.FC = () => {
  return (
    <Content className='w-full flex items-center justify-center' style={{ minHeight: '78vh' }}>
      <Flex gap="large" className=''>
        <TextArea style={{ minHeight: '40vh', width: '40vw', resize: 'none' }} className='bg-[#242424] hover:bg-[#242424] focus:bg-[#242424] border-white hover:border-white focus:border-white'></TextArea>
        <Button />
        <TextArea style={{ minHeight: '40vh', width: '40vw', resize: 'none', cursor: 'pointer' }} disabled></TextArea>
      </Flex>
    </Content>
  )
}
