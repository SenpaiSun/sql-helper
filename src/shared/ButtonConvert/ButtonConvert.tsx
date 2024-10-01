import { Button as ButtonAntd, ConfigProvider, Space } from 'antd';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

interface PropsButtonConvert {
  func: () => void
  text: string
  type: string
  size: string
  className: string
  disabled?: boolean
}

export const ButtonConvert = ({func, text, type, size, className, disabled}: PropsButtonConvert) => {
  const { styles } = useStyle();
  return (
    <ConfigProvider
      button={{
        className: styles.linearGradientButton,
      }}
    >
      <Space>
        <ButtonAntd onClick={func} type={type} size={size} className={className} style={{outline: 'none'}}disabled={disabled || false}>
          {text}
        </ButtonAntd>
      </Space>
    </ConfigProvider>
  );
};
