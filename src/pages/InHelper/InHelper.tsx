import { Button } from '@shared/Button/Button'
import { Flex, Button as ButtonAntd, Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Content } from 'antd/es/layout/layout'

export const InHelper: React.FC = () => {
  return (
    <Content className='w-full flex items-center justify-center' style={{ minHeight: '78vh' }}>
      <Flex className='flex-col' gap='small'>
        <Flex style={{ width: '40vw' }} className='justify-start' gap='large'>
          <Typography.Text className='text-white text-xl'>Format:</Typography.Text>
          <ButtonAntd type='primary' className='text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-20'>
            id,
          </ButtonAntd>
          <ButtonAntd type='primary' className='text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-20'>
            'id',
          </ButtonAntd>
        </Flex>
        <Flex gap='large'>
          <TextArea style={{ minHeight: '40vh', width: '40vw', resize: 'none' }} className='bg-[#242424] hover:bg-[#242424] focus:bg-[#242424] border-white hover:border-white focus:border-white text-white'></TextArea>
          <Button />
          <TextArea style={{ minHeight: '40vh', width: '40vw', resize: 'none', cursor: 'pointer' }} disabled></TextArea>
        </Flex>
      </Flex>
    </Content>
  )
}
