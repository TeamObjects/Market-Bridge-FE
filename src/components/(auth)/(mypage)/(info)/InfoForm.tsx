import InfoTextField from '@/components/(auth)/(mypage)/(info)/InfoTextField';

const InfoForm = () => {
  return (
    <form className="flex flex-col justify-center items-center">
      <InfoTextField name="아이디" />
      <InfoTextField
        name="비밀번호"
        placeholder="현재 비밀번호를 입력해주세요"
      />
    </form>
  );
};

export default InfoForm;
