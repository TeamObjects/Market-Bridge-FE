'use client';

import Button, { STYLE_BUTTON_DEFAULT } from '@/components/Button';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';

const FindAuthButton = () => {
  const router = useRouter();
  const path = usePathname();
  const pathFindPassword = path === '/login/findPassword';
  const pathChangePassword = path === '/login/findPassword/changePassword';

  const handleButtonClick = () => {
    router.push(
      pathFindPassword
        ? '/login/findPassword/changePassword'
        : pathChangePassword
          ? '/login/findPassword?complete=password'
          : '/login/findId?complete=id',
    );
  };

  return (
    <Button
      text={
        path === '/login/findPassword/changePassword'
          ? '확인'
          : path === '/login/findId'
            ? '아이디 찾기'
            : '비밀번호 재설정하기'
      }
      style={`${STYLE_BUTTON_DEFAULT} mt-4 mb-20`}
      onClick={handleButtonClick}
    />
  );
};

export default FindAuthButton;
