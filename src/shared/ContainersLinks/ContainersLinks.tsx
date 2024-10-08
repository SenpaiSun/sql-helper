import { Button } from "@shared/Button/Button";
import { Flex, Input } from "antd";
import { useEffect, useState } from "react";

export const ContainersLinks: React.FC = () => {
  const [activeNumberLink, setActiveNumberLink] = useState<string>(null)
  const [graylogLinks, setGraylogLinks] = useState<any>({
    '1': '',
    '2': '',
    '3': '',
  })

  // установка значения по умолчанию для активной ссылки
  useEffect(() => {
    const numberLinkLocal = localStorage.getItem('activeNumberLink')
    if (!numberLinkLocal) {
      localStorage.setItem('activeNumberLink', '1')
    } else {
      setActiveNumberLink(numberLinkLocal)
    }
  }, [activeNumberLink])

  // установка значения по умолчанию для ссылок
  useEffect(() => {
    const LinksGraylog = localStorage.getItem('LinksGraylog')
    if (!LinksGraylog) {
      localStorage.setItem('LinksGraylog', JSON.stringify(graylogLinks))
    }
  }, [graylogLinks])

  // сменить активную ссылку
  const handleActiveNumberLink = (number: string) => {
    localStorage.setItem('activeNumberLink', number)
    setActiveNumberLink(number)
  }

  // добавить ссылку в localStorage
  const handleAddLink = (number: string) => {

  }

  return (
    <Flex className='flex-col w-4/6' gap='small'>
      <Flex gap='small'>
        <Button text="1" type='primary' className={`text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-10 ${activeNumberLink === '1' && 'bg-green-500'}`} func={() => handleActiveNumberLink('1')}/>
        <Button text="2" type='primary' className={`text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-10 ${activeNumberLink === '2' && 'bg-green-500'}`} func={() => handleActiveNumberLink('2')}/>
        <Button text="3" type='primary' className={`text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-10 ${activeNumberLink === '3' && 'bg-green-500'}`} func={() => handleActiveNumberLink('3')}/>
      </Flex>
      <Flex gap='small'>
        <Input className={`text-white bg-[#3e423e] border-none hover:border-white focus:border-white`}/>
        <Button text="✓" type='primary' className={`text-white bg-green-500 border-none hover:border-white focus:border-white w-10`} func={() => handleActiveNumberLink('3')}/>
      </Flex>
    </Flex>
  );
};
