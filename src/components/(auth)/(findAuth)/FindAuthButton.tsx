'use client';

import Button, { STYLE_BUTTON_DEFAULT } from '@/components/Button';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';

const FindAuthButton = () => {
  const router = useRouter();
  const path = usePathname();
  const pathCheck = path === '/login/findPassword';

  const handleButtonClick = () => {
    router.push(
      pathCheck
        ? '/login/findPassword?complete=password'
        : '/login/findId?complete=id',
    );
  };

  return (
    <Button
      text="인증번호 받기"
      style={`${STYLE_BUTTON_DEFAULT} mt-4 mb-20`}
      onClick={handleButtonClick}
    />
  );
};

export default FindAuthButton;
