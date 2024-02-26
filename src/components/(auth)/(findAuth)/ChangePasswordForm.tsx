import FindAuthButton from '@/components/(auth)/(findAuth)/FindAuthButton';
import FindAuthInput from '@/components/(auth)/(findAuth)/FindAuthInput';

const ChangePasswordForm = () => {
  return (
    <>
      <FindAuthInput
        label="비밀번호"
        type="password"
        name="password"
        placeholder="이름을 입력해주세요."
      />
      <FindAuthInput
        label="비밀번호 재입력"
        type="text"
        name="rePassword"
        placeholder="휴대폰 번호를 입력해주세요."
      />
      <FindAuthButton />
    </>
  );
};

export default ChangePasswordForm;
