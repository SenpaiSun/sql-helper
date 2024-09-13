import { Button as ButtonAntd, ButtonProps} from 'antd'

export interface PropsButton {
  func: (number) => void
  text: string
  type: string
  className: string
  otherProps?: ButtonProps
}

export const Button: React.FC<PropsButton> = ({func, text, type, className, otherProps}: PropsButton) => {
  return (
    <ButtonAntd {...otherProps} style={{outline: 'none'}} type={type} className={className} onClick={func}>
    {text}
  </ButtonAntd>
  );
};
