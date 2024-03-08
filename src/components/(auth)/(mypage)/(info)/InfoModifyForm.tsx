import InfoTextField from './InfoTextField';

const InfoModifyForm = () => {
  return (
    <form>
      <InfoTextField name="아이디" />
      <InfoTextField
        name="현재 비밀번호"
        placeholder="비밀번호를 입력해주세요"
      />
      <InfoTextField
        name="새 비밀번호"
        placeholder="새 비밀번호를 입력해주세요"
      />
      <InfoTextField
        name="새 비밀번호 확인"
        placeholder="새 비밀번호를 다시 입력해 주세요"
      />
      <InfoTextField name="이름" placeholder="이름을 입력해주세요" />
      <InfoTextField name="휴대폰" placeholder="휴대폰 번호를 입력해주세요" />
    </form>
  );
};

export default InfoModifyForm;
