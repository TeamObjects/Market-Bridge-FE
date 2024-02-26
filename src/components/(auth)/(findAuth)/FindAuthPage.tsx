'use client';

import AuthPage, { PageComponentProps } from '@/components/(auth)/AuthPage';

import { useSearchParams } from 'next/navigation';

const FindAuthPage = ({ header, children }: PageComponentProps) => {
  const searchParams = useSearchParams();
  const complete = searchParams.get('complete');

  return (
    <>
      {!(complete === 'id' || complete === 'password') && (
        <AuthPage header={header}>{children}</AuthPage>
      )}
    </>
  );
};

export default FindAuthPage;
