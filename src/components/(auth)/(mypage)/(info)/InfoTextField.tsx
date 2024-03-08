import InfoInput from '@/components/(auth)/(mypage)/(info)/InfoInput';

interface InfoTextFieldProps {
  name: string;
  placeholder?: string;
}

const InfoTextField = ({ name, placeholder }: InfoTextFieldProps) => {
  return (
    <div className="flex justify-center items-center w-full px-[20px] py-[10px]">
      <label
        htmlFor="name"
        id="name"
        className="w-[120px] text-[16px] font-semibold"
      >
        {name}
      </label>
      <InfoInput name={name} placeholder={placeholder} />
    </div>
  );
};

export default InfoTextField;
