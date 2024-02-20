import FindAuthButton from './FindAuthButton';
import FindAuthInput from './FindAuthInput';

const FindAuthForm = () => {
  return (
    <>
      <FindAuthInput
        label="이름"
        type="text"
        name="name"
        placeholder="이름을 입력해주세요."
      />
      <FindAuthInput
        label="휴대폰 번호"
        type="text"
        name="phone"
        placeholder="휴대폰 번호를 입력해주세요."
      />
      <FindAuthInput
        label="인증번호 입력"
        type="text"
        name="authNumber"
        placeholder="인증번호 입력"
      />
      <FindAuthButton />
    </>
  );
};

export default FindAuthForm;
