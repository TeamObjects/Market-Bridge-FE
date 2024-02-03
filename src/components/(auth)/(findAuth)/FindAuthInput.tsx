import AuthInput from '../AuthInput';

interface FindAuthInputProps {
  label: string;
  type: string;
  placeholder: string;
}

const FindAuthInput = ({ label, type, placeholder }: FindAuthInputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="ml-2 mb-4 text-[12px] text-[#011B5B]">
        {label}
      </label>
      <AuthInput id={label} type={type} placeholder={placeholder} />
    </div>
  );
};

export default FindAuthInput;
