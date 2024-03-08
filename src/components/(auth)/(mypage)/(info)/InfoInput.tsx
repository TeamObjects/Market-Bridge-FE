interface InfoInputProps {
  name: string;
  placeholder?: string;
}

const InfoInput = ({ name, placeholder }: InfoInputProps) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      className="w-[305px] h-[50px] pl-8 text-[16px] border-[1px] border-gray-300 outline-none"
    />
  );
};

export default InfoInput;
