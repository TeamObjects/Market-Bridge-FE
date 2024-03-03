'use client';

import FoundIdMain from '@/components/(auth)/(findAuth)/FoundIdMain';
import AuthPage from '@/components/(auth)/AuthPage';
import Button from '@/components/shared/Button';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { ReactNode } from 'react';

const STYLE_WHITE_BUTTON =
  'w-[100%] h-[44px] p-6 mb-4 text-[13px] text-[#011B5B] border-[1px] border-solid border-[#011B5B] rounded-full bg-white';

const FoundAuthPage = ({ header }: { header: ReactNode }) => {
  const searchParams = useSearchParams();
  const complete = searchParams.get('complete');

  return (
    <>
      {complete === 'id' && (
        <AuthPage header={header}>
          <FoundIdMain />
          <Link href="/login/findPassword">
            <Button text="비밀번호 찾기" style={STYLE_WHITE_BUTTON} />
          </Link>
          <Link href="/login">
            <Button text="로그인" />
          </Link>
        </AuthPage>
      )}
    </>
  );
};

export default FoundAuthPage;
