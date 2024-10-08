import { graylogConverterText } from '@entities/hooks/graylogConverterText'
import { ButtonClear } from '@shared/ButtonClear/ButtonClear'
import { ButtonConvert } from '@shared/ButtonConvert/ButtonConvert'
import { ButtonCopy } from '@shared/ButtonCopy/ButtonCopy'
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

  // Функция копирования в буфер обмена
  const handleCopyValue = () => {
    navigator.clipboard.writeText(outputText)
  }

  // Функция очистки инпута и аутпута текста
  const clearTextAreas = () => {
    setInputText('')
    setOutputText('')
  }

  return (
    <Content className='w-full flex items-center justify-center' style={{ minHeight: '78vh' }}>
      <Flex gap='small' className='flex-col'>
        <Flex className='justify-between'>
          <Flex style={{ width: '40vw' }} className='justify-end'>
            <ButtonClear func={() => clearTextAreas()} />
          </Flex>
          <Flex style={{ width: '40vw' }}>
            <ButtonCopy func={() => handleCopyValue()} />
          </Flex>
        </Flex>
        <Flex gap='large' className='flex-row'>
          <Input inputText={inputText} setInputText={setInputText} style={{ minHeight: '40vh', width: '40vw', resize: 'none' }} disabled={false} />
          <ButtonConvert func={() => handleConvertValue(inputText)} disabled={false} text='Convert' type='primary' size='large' className='w-24 h-24 rounded-full' />
          <Input inputText={outputText} setInputText={setOutputText} style={{ minHeight: '40vh', width: '40vw', resize: 'none' }} disabled={true} />
        </Flex>
      </Flex>
    </Content>
  )
}
