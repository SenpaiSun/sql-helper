import { Button } from '@shared/Button/Button';

interface PropsButtonClear {
  func: () => void
}

export const ButtonClear: React.FC<PropsButtonClear> = ({func}) => {
  return (
    <Button text='Clear' type='primary' className={`text-white bg-[#3e423e] border-none hover:border-white focus:border-white w-20`} func={func} otherProps={{ danger: true }} />
  );
};
