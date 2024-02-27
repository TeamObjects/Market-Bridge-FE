'use client';

import Button from '@/components/shared/Button';

import Link from 'next/link';

const STYLE_FIND_AUTH = 'text-[#011B5B]';

const LoginFormFindButtons = () => {
  return (
    <div className="flex justify-center items-center text-[#011B5B]">
      <Link href="/login/findId">
        <Button
          text="아이디"
          style={`${STYLE_FIND_AUTH} mx-2 hover:border-b-[1px] hover:border-[#011B5B]`}
        />
      </Link>
      <Link href="/login/findPassword">
        <Button
          text="비밀번호"
          style={`${STYLE_FIND_AUTH} mx-2 hover:border-b-[1px] hover:border-[#011B5B]`}
        />
      </Link>
      <div>찾기</div>
    </div>
  );
};

export default LoginFormFindButtons;
