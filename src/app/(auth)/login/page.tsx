import AuthDivider from '@/components/(auth)/AuthDivider';
import AuthHeader from '@/components/(auth)/AuthHeader';
import AuthPage from '@/components/(auth)/AuthPage';
import LogInForm from '@/components/(auth)/LogInForm';
import OAuthFooter from '@/components/(auth)/OAuthFooter';

const LogIn = () => {
  return (
    <AuthPage
      header={<AuthHeader />}
      divider={<AuthDivider />}
      footer={<OAuthFooter />}
    >
      <LogInForm />
    </AuthPage>
  );
};

export default LogIn;
