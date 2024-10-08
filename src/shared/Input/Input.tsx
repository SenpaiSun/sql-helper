import TextArea from "antd/es/input/TextArea";

export interface PropsInput {
  inputText: string
  setInputText: React.Dispatch<React.SetStateAction<string>>
  style: React.CSSProperties
  disabled: boolean
}

export const Input: React.FC<PropsInput> = ({inputText, setInputText, style, disabled}: PropsInput) => {
  return (
    <TextArea className={`bg-[#242424] hover:bg-[#242424] focus:bg-[#242424] border-white hover:border-white focus:border-white text-white placeholder-white disabled:text-white disabled:cursor-auto disabled:bg-[#242424]`} value={inputText} onChange={(e) => setInputText(e.target.value)} style={style}  disabled={disabled}/>
  );
};
