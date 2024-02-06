'use client';

import ChangePasswordCompleteModal from '@/components/(auth)/(findAuth)/ChangePasswordCompleteModal';
import FindAuthForm from '@/components/(auth)/(findAuth)/FindAuthForm';
import FindAuthNav from '@/components/(auth)/(findAuth)/FindAuthNav';
import FindAuthPage from '@/components/(auth)/(findAuth)/FindAuthPage';
import ResetPasswordModal from '@/components/(auth)/(findAuth)/ResetPasswordModal';
import FormContext from '@/contexts/FormContext';
import { useSearchParams } from 'next/navigation';

const FindPassword = () => {
  const searchParams = useSearchParams();
  const complete = searchParams.get('complete');

  const handleButtonClick = () => {
    console.log('click');
  };

  if (complete === 'password') {
    return <ChangePasswordCompleteModal />;
  }

  return (
    <>
      <FindAuthPage header={<h1 className="text-3xl my-14">비밀번호 찾기</h1>}>
        <FindAuthNav />
        <FormContext id="findPassword-form" formType="findPassword">
          <FindAuthForm onClick={handleButtonClick} />
        </FormContext>
      </FindAuthPage>
      {false && <ResetPasswordModal />}
    </>
  );
};

export default FindPassword;
