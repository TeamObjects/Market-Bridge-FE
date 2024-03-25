import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  text?: string;
  children?: ReactNode; /** 아이콘 등 버튼 내부를 복잡하게 정의하고 싶은 경우, text 대신 사용 */
  type?: 'button' | 'submit' | 'reset' | undefined;
  style?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const STYLE_BUTTON_DEFAULT =
  'w-[100%] h-[44px] xs:h-[40px] p-6 mb-4 text-[13px] text-white rounded-full bg-[#011B5B]';

const Button = ({
  text,
  children,
  type = 'button',
  style = STYLE_BUTTON_DEFAULT,
  disabled = false,
  onClick,
}: ButtonProps) => {

  return (
    <button type={type} className={style} onClick={onClick} disabled={disabled}>
      {text ?? children}
    </button>
  );
};
export default Button;
