'use client';

import { useRouter } from 'next/navigation';
import Button from '../Button';
import AuthInput from './AuthInput';

const STYLE_WHITE_BUTTON =
  'w-[100%] h-[44px] p-6 mb-4 text-[13px] text-[#011B5B] border-[1px] border-solid border-[#011B5B] rounded-full bg-white';
const STYLE_FIND_AUTH = 'text-[#011B5B]';

const LogInForm = () => {
  const router = useRouter();

  return (
    <form>
      <h1 className="my-6 text-3xl">로그인</h1>
      <AuthInput type="text" placeholder="아이디를 입력해주세요" />
      <AuthInput type="password" placeholder="비밀번호를 입력해주세요" />
      <div className="flex items-center justify-between h-[15px] my-6 text-xl">
        <div>
          <label htmlFor="auto-login" className="flex items-center">
            <input type="checkbox" id="auto-login" className="mx-2" />
            자동 로그인
          </label>
        </div>
        <div className="flex justify-center items-center text-[#011B5B]">
          <Button
            text="아이디"
            style={`${STYLE_FIND_AUTH} mx-2 hover:border-b-[1px] hover:border-[#011B5B]`}
            onClick={() => router.push('/login/findId')}
          />
          /
          <Button
            text="비밀번호"
            style={`${STYLE_FIND_AUTH} mx-2 hover:border-b-[1px] hover:border-[#011B5B]`}
            onClick={() => router.push('/login/findPassword')}
          />
          <div>찾기</div>
        </div>
      </div>
      <Button text="로그인" onClick={() => router.push('/')} />
      <Button
        text="회원가입"
        style={STYLE_WHITE_BUTTON}
        onClick={() => router.push('/register')}
      />
    </form>
  );
};

export default LogInForm;
