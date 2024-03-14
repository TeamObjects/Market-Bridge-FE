import Button from '@/components/shared/Button';

interface InfoButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const STYLE_BUTTON =
  'w-[250px] h-[60px] mt-20 rounded-[3px] text-[18px] text-white bg-[#011B5B]';

const InfoButton = ({ type }: InfoButtonProps) => {
  return (
    <div className="flex justify-center w-full border-t-[1px] mt-6 pt-6 border-gray-300">
      <Button text="확인" style={STYLE_BUTTON} type={type} />
    </div>
  );
};

export default InfoButton;
