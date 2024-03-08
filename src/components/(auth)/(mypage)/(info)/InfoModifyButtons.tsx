import Button from '@/components/shared/Button';

const STYLE_BUTTON_UNSUBSCRIBE =
  'w-[130px] px-8 py-4 mr-6 text-[16px] text-[#011B5B] bg-white border-[#011B5B] border-[1px] rounded-[3px]';
const STYLE_BUTTON_MODIFY =
  'w-[130px] px-8 py-4 mr-6 text-[16px] text-white bg-[#011B5B] border-[#011B5B] border-[1px] rounded-[3px]';

const InfoModifyButtons = () => {
  return (
    <div className="flex justify-center my-[50px]">
      <Button text="탈퇴하기" style={STYLE_BUTTON_UNSUBSCRIBE} />
      <Button text="회원정보수정" style={STYLE_BUTTON_MODIFY} />
    </div>
  );
};

export default InfoModifyButtons;
