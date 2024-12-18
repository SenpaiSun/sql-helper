import { Button as ButtonAntd, ButtonProps } from 'antd'

export interface PropsButton {
  func: (...args) => void
  text: string
  type: "dashed" | "default" | "text" | "link" | "primary"
  className: string
  otherProps?: ButtonProps
}

export const Button: React.FC<PropsButton> = ({ func, text, type, className, otherProps }: PropsButton) => {
  return (
    <ButtonAntd {...otherProps} style={{ outline: 'none' }} type={type} className={className} onClick={func}>
      {text}
    </ButtonAntd>
  )
}
