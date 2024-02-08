'use client';

import { useSearchParams } from 'next/navigation';
import AuthPage, { PageComponentProps } from '../AuthPage';

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
