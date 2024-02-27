import AuthInput from '@/components/(auth)/AuthInput';
import LoginFormButtons from '@/components/(auth)/LoginFormFindButtons';
import ValidationMessage from '@/components/(auth)/ValidationMessage';
import ValidationMessages from '@/components/(auth)/ValidationMessages';

const LoginFormMain = () => {
  return (
    <>
      <h1 className="my-6 text-3xl">로그인</h1>
      <AuthInput type="text" name="email" placeholder="아이디를 입력해주세요" />
      <ValidationMessages name="email">
        <ValidationMessage text="이메일 형식에 맞게 입력해주세요." />
      </ValidationMessages>
      <AuthInput
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <div className="flex items-center justify-between h-[15px] my-6 text-xl">
        <div>
          <label htmlFor="auto-login" className="flex items-center">
            <input type="checkbox" id="auto-login" className="mx-2" />
            자동 로그인
          </label>
        </div>
        <LoginFormButtons />
      </div>
    </>
  );
};

export default LoginFormMain;
