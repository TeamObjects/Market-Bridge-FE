import AuthHeader from '@/components/(auth)/AuthHeader';
import AuthPage from '@/components/(auth)/AuthPage';
import RegisterForm from '@/components/(auth)/RegisterForm';
import RegisterFormView from '@/components/(auth)/RegisterFormView';

const Register = () => {
  return (
    <AuthPage header={<AuthHeader />}>
      <span className="text-xl xs:text-[10px]">단계 1/2</span>
      <RegisterForm>
        <RegisterFormView />
      </RegisterForm>
    </AuthPage>
  );
};

export default Register;
