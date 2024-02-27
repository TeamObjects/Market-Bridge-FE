import AuthInput from '@/components/(auth)/AuthInput';
import { ChangeEvent } from 'react';

interface FindAuthInputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

const FindAuthInput = ({
  label,
  type,
  name,
  placeholder,
}: FindAuthInputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="ml-2 mb-4 text-[12px] text-[#011B5B]">
        {label}
      </label>
      <AuthInput id={label} name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default FindAuthInput;
