import Button from '@/components/shared/Button';

const STYLE_BUTTON =
  'w-[250px] h-[60px] mt-20 rounded-[3px] text-[18px] text-white bg-[#011B5B]';

const InfoButton = () => {
  return (
    <div className="flex justify-center">
      <Button text="확인" style={STYLE_BUTTON} />
    </div>
  );
};

export default InfoButton;
