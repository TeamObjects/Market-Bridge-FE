import ChangePasswordCompleteModal from '@/components/(auth)/(findAuth)/ChangePasswordCompleteModal';
import FindAuthForm from '@/components/(auth)/(findAuth)/FindAuthForm';
import FindAuthFormMain from '@/components/(auth)/(findAuth)/FindAuthFormMain';
import FindAuthPage from '@/components/(auth)/(findAuth)/FindAuthPage';
import AuthHeader from '@/components/(auth)/AuthHeader';

const FindPassword = () => {
  return (
    <>
      <FindAuthPage
        header={
          <>
            <AuthHeader />
            <h1 className="text-center text-3xl my-14">비밀번호 재설정</h1>
          </>
        }
      >
        <FindAuthForm>
          <FindAuthFormMain />
        </FindAuthForm>
      </FindAuthPage>
      <ChangePasswordCompleteModal />
    </>
  );
};

export default FindPassword;
