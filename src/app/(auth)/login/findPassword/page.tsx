'use client';

import ChangePasswordCompleteModal from '@/components/(auth)/(findAuth)/ChangePasswordCompleteModal';
import FindAuthForm from '@/components/(auth)/(findAuth)/FindAuthForm';
import FindAuthNav from '@/components/(auth)/(findAuth)/FindAuthNav';
import FindAuthPage from '@/components/(auth)/(findAuth)/FindAuthPage';
import ResetPasswordModal from '@/components/(auth)/(findAuth)/ResetPasswordModal';
import { useSearchParams } from 'next/navigation';

const FindPassword = () => {
  const searchParams = useSearchParams();
  const complete = searchParams.get('complete');

  if (complete === 'password') {
    return <ChangePasswordCompleteModal />;
  }

  return (
    <>
      <FindAuthPage header={<h1 className="text-3xl my-14">비밀번호 찾기</h1>}>
        <FindAuthNav />
        <FindAuthForm />
      </FindAuthPage>
      {false && <ResetPasswordModal />}
    </>
  );
};

export default FindPassword;
