import { graylogConverterText } from '@entities/hooks/graylogConverterText'
import { ButtonConvert } from '@shared/ButtonConvert/ButtonConvert'
import { Input } from '@shared/Input/Input'
import { Flex } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { useState } from 'react'

export const GraylogConverter: React.FC = () => {
  const [inputText, setInputText] = useState<string>('')
  const [outputText, setOutputText] = useState<string>('')

  const handleConvertValue = (text: string) => {
    setOutputText(graylogConverterText(text))
  }

  return (
    <Content className='w-full flex items-center justify-center' style={{ minHeight: '78vh' }}>
      <Flex gap='large'>
        <Input inputText={inputText} setInputText={setInputText} style={{ minHeight: '40vh', width: '40vw', resize: 'none' }} disabled={false} />
        <ButtonConvert func={() => handleConvertValue(inputText)} disabled={false} text='Convert' type='primary' size='large' className='w-24 h-24 rounded-full' />
        <Input inputText={outputText} setInputText={setOutputText} style={{ minHeight: '40vh', width: '40vw', resize: 'none' }} disabled={true} />
      </Flex>
    </Content>
  )
}
