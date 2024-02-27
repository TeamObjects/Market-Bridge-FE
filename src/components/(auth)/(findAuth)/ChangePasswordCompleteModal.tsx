'use client';

import AuthPage from '@/components/(auth)/AuthPage';
import Button from '@/components/Button';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const ChangePasswordCompleteModal = () => {
  const searchParams = useSearchParams();
  const complete = searchParams.get('complete');

  return (
    <>
      {complete === 'password' && (
        <AuthPage
          header={
            <h1 className="mt-16 mb-8 text-[18px] text-[#011B5B]">
              비밀번호 변경이 완료되었습니다.
            </h1>
          }
        >
          <Link href="/login">
            <Button text="로그인" />
          </Link>
        </AuthPage>
      )}
    </>
  );
};

export default ChangePasswordCompleteModal;
