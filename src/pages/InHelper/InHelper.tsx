import { Button } from '@shared/Button/Button'
import { ButtonConvert } from '@shared/ButtonConvert/ButtonConvert'
import { Input } from '@shared/Input/Input'
import { Flex, Typography } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { useEffect, useState } from 'react'

export const InHelper: React.FC = () => {
  const [inputText, setInputText] = useState<string>('')
  const [outputText, setOutputText] = useState<string>('')
  // format 1 - преобразовывает в формат для MySQL (пример: id1, id2, id3)
  // format 2 - преобразовывает в формат для Clickhouse (пример: 'id1', 'id2', 'id3')
  const [selectedButtonFormat, setSelectedButtonFormat] = useState<number | null>(null)

  // set default value
  useEffect(() => {
    const formatLocal = Number(localStorage.getItem('format'))
    if (formatLocal) {
      setSelectedButtonFormat(formatLocal)
    } else {
      setSelectedButtonFormat(1)
    }
  }, [])

  // сменить формат для конвертирования - id, or 'id',
  const changeFormat = (num: number) => {
    setSelectedButtonFormat(num)
    localStorage.setItem('format', num.toString())
  }
  console.log(inputText)

  // Функция для преобразования в MySQL-подобный формат данных
  const convertValueInHelperFormat1 = (value: string) => {
    const idsArray = value.split('\n')
    const idsArrayFiltered = idsArray.filter((item) => item.trim() !== '')
    return idsArrayFiltered
      .map((id: string, index) => {
        const idClear = id.trim()
        if (index === 0) {
          return idClear
        }
        return ' ' + idClear
      })
      .join(',') // Преобразование массива в строку
  }

  // Функция для преобразования в Clickhouse-подобный формат данных
  const convertValueInHelperFormat2 = (value: string) => {
    const idsArray = value.split('\n')
    const idsArrayFiltered = idsArray.filter((item) => item.trim() !== '')
    return idsArrayFiltered
      .map((id: string, index) => {
        const idClear = id.trim()
        if (index === 0) {
          return "'" + idClear + "'"
        }
        return " '" + idClear + "'"
      })
      .join(',') // Преобразование массива в строку
  }

  const handleConvertValue = () => {
    if (selectedButtonFormat === 1) {
      setOutputText(convertValueInHelperFormat1(inputText))
    } else if (selectedButtonFormat === 2) {
      setOutputText(convertValueInHelperFormat2(inputText))
    }
  }
  // Функция очистки инпута и аутпута текста
  const clearTextAreas = () => {
    setInputText('')
    setOutputText('')
  }
  // Функция копирования в буфер обмена
  const handleCopyValue = () => {
    navigator.clipboard.writeText(outputText)
  }

  return (
    <Content className='w-full flex items-center justify-center' style={{ minHeight: '78vh' }}>
      <Flex className='flex-col' gap='small'>
        <Flex className='justify-between'>
          <Flex style={{ width: '40vw' }} className='justify-between' gap='large'>
            <Flex className='justify-start' gap='large'>
              <Typography.Text className='text-white text-xl'>Format:</Typography.Text>
              <Button text='id,' type='primary' className={`text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-20 ${selectedButtonFormat === 1 && 'bg-green-500'}`} func={() => changeFormat(1)} />
              <Button text="'id'," type='primary' className={`text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-20 ${selectedButtonFormat === 2 && 'bg-green-500'}`} func={() => changeFormat(2)} />
            </Flex>
            <Flex>
              <Button text='Clear' type='primary' className={`text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-20`} func={() => clearTextAreas()} otherProps={{ danger: true }} />
            </Flex>
          </Flex>
          <Flex style={{ width: '40vw' }} className='justify-start' gap='large'>
            <Button text='Copy' type='primary' className={`text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-20`} func={() => handleCopyValue()}  />
          </Flex>
        </Flex>
        <Flex gap='large'>
          <Input inputText={inputText} setInputText={setInputText} style={{ minHeight: '40vh', width: '40vw', resize: 'none' }} disabled={false} />
          <ButtonConvert func={handleConvertValue} text='Convert' type='primary' size='large' className='w-24 h-24 rounded-full' />
          <Input inputText={outputText} setInputText={setInputText} style={{ minHeight: '40vh', width: '40vw', resize: 'none' }} disabled={true} />
        </Flex>
      </Flex>
    </Content>
  )
}
