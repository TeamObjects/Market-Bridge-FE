import Button from '@/components/Button';

import Link from 'next/link';

const STYLE_WHITE_BUTTON =
  'w-[100%] h-[44px] p-6 mb-4 text-[13px] text-[#011B5B] border-[1px] border-solid border-[#011B5B] rounded-full bg-white';

const LoginFormButtons = () => {
  return (
    <>
      <Button text="로그인" type="submit" />
      <Link href="/register">
        <Button text="회원가입" style={STYLE_WHITE_BUTTON} />
      </Link>
    </>
  );
};

export default LoginFormButtons;
