import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  style?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const STYLE_BUTTON_DEFAULT =
  'w-[100%] h-[44px] xs:h-[40px] p-6 mb-4 text-[13px] text-white rounded-full bg-[#011B5B]';

const Button = ({
  children,
  type = 'button',
  style = STYLE_BUTTON_DEFAULT,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button type={type} className={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
