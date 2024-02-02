interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  style?: string;
  onClick?: () => void;
}

const STYLE_DEFAULT =
  'w-[100%] h-[44px] xs:h-[40px] p-6 mb-4 text-[13px] text-white rounded-full bg-[#011B5B]';

const Button = ({
  text,
  type = 'button',
  style = STYLE_DEFAULT,
  onClick,
}: ButtonProps) => {
  return (
    <button type={type} className={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
