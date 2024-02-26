import ChangePasswordCompleteModal from '@/components/(auth)/(findAuth)/ChangePasswordCompleteModal';
import FindAuthForm from '@/components/(auth)/(findAuth)/FindAuthForm';
import FindAuthPage from '@/components/(auth)/(findAuth)/FindAuthPage';
import AuthHeader from '@/components/(auth)/AuthHeader';

import FormContext from '@/contexts/FormContext';

const FindPassword = () => {
  return (
    <>
      <FindAuthPage
        header={
          <>
            <AuthHeader />
            <h1 className="text-center text-3xl my-14">비밀번호 찾기</h1>
          </>
        }
      >
        <FindAuthForm>
          <div>d</div>
        </FindAuthForm>
      </FindAuthPage>
      <ChangePasswordCompleteModal />
    </>
  );
};

export default FindPassword;
