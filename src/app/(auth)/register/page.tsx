import AuthDivider from '@/components/(auth)/AuthDivider';
import AuthHeader from '@/components/(auth)/AuthHeader';
import AuthPage from '@/components/(auth)/AuthPage';
import OAuthFooter from '@/components/(auth)/OAuthFooter';
import RegisterForm from '@/components/(auth)/RegisterForm';

const Register = () => {
  return (
    <AuthPage
      header={<AuthHeader />}
      divider={<AuthDivider />}
      footer={<OAuthFooter />}
    >
      <span className="text-xl xs:text-[10px]">단계 1/2</span>
      <RegisterForm />
    </AuthPage>
  );
};

export default Register;
