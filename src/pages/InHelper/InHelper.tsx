import { Button } from '@shared/Button/Button'
import { Flex, Button as ButtonAntd, Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
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

  // change format - id, or 'id',
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

  return (
    <Content className='w-full flex items-center justify-center' style={{ minHeight: '78vh' }}>
      <Flex className='flex-col' gap='small'>
        <Flex style={{ width: '40vw' }} className='justify-start' gap='large'>
          <Typography.Text className='text-white text-xl'>Format:</Typography.Text>
          <ButtonAntd type='primary' className={`text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-20 ${selectedButtonFormat === 1 && 'bg-green-500'}`} style={{ outline: 'none' }} onClick={() => changeFormat(1)}>
            id,
          </ButtonAntd>
          <ButtonAntd type='primary' className={`text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-20 ${selectedButtonFormat === 2 && 'bg-green-500'}`} style={{ outline: 'none' }} onClick={() => changeFormat(2)}>
            'id',
          </ButtonAntd>
        </Flex>
        <Flex gap='large'>
          <TextArea value={inputText} onChange={(e) => setInputText(e.target.value)} style={{ minHeight: '40vh', width: '40vw', resize: 'none' }} className='bg-[#242424] hover:bg-[#242424] focus:bg-[#242424] border-white hover:border-white focus:border-white text-white placeholder-white' />
          <Button func={handleConvertValue} />
          <TextArea value={outputText} style={{ minHeight: '40vh', width: '40vw', resize: 'none', cursor: 'pointer', color: 'white' }} disabled />
        </Flex>
      </Flex>
    </Content>
  )
}
