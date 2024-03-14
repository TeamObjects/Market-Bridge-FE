import { ChangeEvent } from 'react';

interface InfoTextFieldProps {
  type: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InfoTextField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}: InfoTextFieldProps) => {
  return (
    <div className="flex justify-center items-center w-full px-[20px] py-[10px]">
      <label
        htmlFor="name"
        id="name"
        className="w-[120px] text-[16px] font-semibold"
      >
        {name}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-[305px] h-[50px] pl-8 text-[16px] border-[1px] border-gray-300 outline-none rounded-[5px]"
      />
    </div>
  );
};

export default InfoTextField;
