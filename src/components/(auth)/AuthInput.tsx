'use client';

import { FormValue, formContext } from '@/contexts/FormContext';

import { useContext } from 'react';

interface AuthInputProps {
  type: string;
  name: string;
  placeholder: string;
  style?: string;
  id?: string;
}

const STYLE_INPUT_DEFAULT =
  'input-field w-[100%] h-[44px] xs:h-[40px] p-6 mb-4 rounded-full border-[1px] border-solid border-[#011B5B] bg-[rgba(150,226,250,0.3)] text-[14px] placeholder:text-[12px] outline-none';

const AuthInput = ({
  type,
  name,
  placeholder,
  style = STYLE_INPUT_DEFAULT,
  id,
}: AuthInputProps) => {
  const { handleChange } = useContext(formContext) as FormValue;

  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      className={style}
      onChange={handleChange}
      required
    />
  );
};

export default AuthInput;
