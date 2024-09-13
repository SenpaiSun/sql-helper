import { ButtonConvert } from "@shared/ButtonConvert/ButtonConvert";
import { Input } from "@shared/Input/Input";
import { Flex } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";

export const CompareText: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleCompareTexts = () => {

  }
  return (
<Content className='w-full flex items-center justify-center' style={{ minHeight: '78vh' }}>
      <Flex className='flex-col' gap='small'>
        <Flex gap='large'>
          <Input inputText={inputText} setInputText={setInputText} style={{ minHeight: '40vh', width: '40vw', resize: 'none' }} disabled={false} />
          <ButtonConvert func={handleCompareTexts} text='Compare' type='primary' size='large' className='w-24 h-24 rounded-full' />
          <Input inputText={outputText} setInputText={setOutputText} style={{ minHeight: '40vh', width: '40vw', resize: 'none' }} disabled={false}/>
        </Flex>
      </Flex>
    </Content>
  );
};
