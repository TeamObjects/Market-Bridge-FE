interface AuthInputProps {
  type: string;
  placeholder: string;
  style?: string;
  id?: string;
}

const STYLE_INPUT_DEFAULT =
  'input-field w-[100%] h-[44px] xs:h-[40px] p-6 mb-4 rounded-full border-[1px] border-solid border-[#011B5B] bg-[rgba(150,226,250,0.3)] text-[14px] placeholder:text-[12px] outline-none';

const AuthInput = ({
  type,
  placeholder,
  style = STYLE_INPUT_DEFAULT,
  id,
}: AuthInputProps) => {
  return (
    <input id={id} type={type} placeholder={placeholder} className={style} />
  );
};

export default AuthInput;
