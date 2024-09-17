import { compareTexts } from '@entities/hooks/compareText'
import { ButtonConvert } from '@shared/ButtonConvert/ButtonConvert'
import { Input } from '@shared/Input/Input'
import { PopupCompareResult } from '@shared/PopupCompareResult/PopupCompareResult'
import { Button, Flex } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { useState } from 'react'

export const CompareText: React.FC = () => {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [isPopupVisible, setIsPopupVisible] = useState(false) // Статус отображения попапа
  const closePopup = () => {
    setIsPopupVisible(false) // Закрыть попап
  }
  const openPopup = () => {
    setIsPopupVisible(true)
  }
  const handleCompareTexts = () => {
    console.log(compareTexts(inputText, outputText))
  }
  return (
    <Content className='w-full flex items-center justify-center' style={{ minHeight: '78vh' }}>
      {isPopupVisible && (
        <>
          {/* Оверлей для затемнения фона */}
          <div className='fixed inset-0 bg-black opacity-50 z-10' onClick={closePopup}></div>
          {/* Попап */}
          <PopupCompareResult />
        </>
      )}
      <Flex className='flex-col' gap='small'>
        <Button type='primary' className='mb-12 w-40 h-10 mx-auto' onClick={() => openPopup()} style={{outline: 'none'}}>Open compare text</Button>
        <Flex gap='large'>
          <Input inputText={inputText} setInputText={setInputText} style={{ minHeight: '40vh', width: '40vw', resize: 'none' }} disabled={false} />
          <ButtonConvert func={handleCompareTexts} text='Compare' type='primary' size='large' className='w-24 h-24 rounded-full' />
          <Input inputText={outputText} setInputText={setOutputText} style={{ minHeight: '40vh', width: '40vw', resize: 'none' }} disabled={false} />
        </Flex>
      </Flex>
    </Content>
  )
}
