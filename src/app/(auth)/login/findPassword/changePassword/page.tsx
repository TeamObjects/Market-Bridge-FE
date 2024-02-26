import ChangePasswordForm from '@/components/(auth)/(findAuth)/ChangePasswordForm';
import FindAuthPage from '@/components/(auth)/(findAuth)/FindAuthPage';
import AuthHeader from '@/components/(auth)/AuthHeader';
import FormContext from '@/contexts/FormContext';

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
        <FormContext id="findPassword-form" formType="findPassword">
          <ChangePasswordForm />
        </FormContext>
      </FindAuthPage>
    </>
  );
};

export default ChangePassword;
