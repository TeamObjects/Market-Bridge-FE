import Button from '@/components/shared/Button';

interface InfoModifyButtonsProps {
  type: 'submit' | 'reset' | 'button' | undefined;
}

const STYLE_BUTTON_MODIFY =
  'w-[200px] px-8 py-4 mr-6 text-[16px] text-white bg-[#011B5B] border-[#011B5B] border-[1px] rounded-[3px]';

const InfoModifyButtons = ({ type }: InfoModifyButtonsProps) => {
  return (
    <div className="flex justify-center w-full border-t-[1px] mt-6 pt-6 border-gray-300">
      <Button text="회원정보수정" style={STYLE_BUTTON_MODIFY} type={type} />
    </div>
  );
};

export default InfoModifyButtons;
