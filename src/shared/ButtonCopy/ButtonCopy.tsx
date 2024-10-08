import { Button } from '@shared/Button/Button'

interface PropsButtonCopy {
  func: () => void
}

export const ButtonCopy: React.FC<PropsButtonCopy> = ({func}) => {
  return <Button text='Copy' type='primary' className={`text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-20`} func={func} />
}
