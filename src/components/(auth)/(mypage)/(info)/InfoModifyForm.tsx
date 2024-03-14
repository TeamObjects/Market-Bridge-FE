import InfoTextField from './InfoTextField';

const InfoModifyForm = () => {
  return (
    <form>
      <InfoTextField type="text" name="아이디" />
      <InfoTextField
        type="password"
        name="현재 비밀번호"
        placeholder="비밀번호를 입력해주세요"
      />
      <InfoTextField
        type="password"
        name="새 비밀번호"
        placeholder="새 비밀번호를 입력해주세요"
      />
      <InfoTextField
        type="password"
        name="새 비밀번호 확인"
        placeholder="새 비밀번호를 다시 입력해 주세요"
      />
      <InfoTextField
        type="text"
        name="이름"
        placeholder="이름을 입력해주세요"
      />
      <InfoTextField
        type="text"
        name="휴대폰"
        placeholder="휴대폰 번호를 입력해주세요"
      />
    </form>
  );
};

export default InfoModifyForm;
