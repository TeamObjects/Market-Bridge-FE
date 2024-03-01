import AuthHeader from '@/components/(auth)/AuthHeader';
import AuthPage from '@/components/(auth)/AuthPage';
import LogInForm from '@/components/(auth)/LogInForm';
import LoginFormView from '@/components/(auth)/LoginFormView';

const LogIn = () => {
  return (
    <AuthPage header={<AuthHeader />}>
      <LogInForm>
        <LoginFormView />
      </LogInForm>
    </AuthPage>
  );
};

export default LogIn;
