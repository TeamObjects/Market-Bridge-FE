'use client';

import React from 'react';
import AuthPage from '../AuthPage';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

const ChangePasswordCompleteModal = () => {
  const router = useRouter();

  return (
    <AuthPage
      header={
        <h1 className="mt-16 mb-8 text-[18px] text-[#011B5B]">
          비밀번호 변경이 완료되었습니다.
        </h1>
      }
    >
      <Button text="로그인" onClick={() => router.push('/login')} />
    </AuthPage>
  );
};

export default ChangePasswordCompleteModal;
