import ChangePasswordForm from '@/components/(auth)/(findAuth)/ChangePasswordForm';
import FindAuthForm from '@/components/(auth)/(findAuth)/FindAuthForm';
import FindAuthPage from '@/components/(auth)/(findAuth)/FindAuthPage';
import AuthHeader from '@/components/(auth)/AuthHeader';

const ChangePassword = () => {
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
          <ChangePasswordForm />
        </FindAuthForm>
      </FindAuthPage>
    </>
  );
};

export default ChangePassword;
