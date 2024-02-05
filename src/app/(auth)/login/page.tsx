'use client';

import AuthDivider from '@/components/(auth)/AuthDivider';
import AuthHeader from '@/components/(auth)/AuthHeader';
import AuthPage from '@/components/(auth)/AuthPage';
import LogInForm from '@/components/(auth)/LogInForm';
import OAuthFooter from '@/components/(auth)/OAuthFooter';
import FormContext from '@/contexts/FormContext';
import { validationFunctions } from '@/utils/isValidationCheck';
import { useRouter } from 'next/navigation';

const LogIn = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/');
  };

  return (
    <AuthPage
      header={<AuthHeader />}
      divider={<AuthDivider />}
      footer={<OAuthFooter />}
    >
      <FormContext
        formType="login"
        id="login-form"
        className=""
        validate={validationFunctions}
        onSubmit={handleSubmit}
      >
        <LogInForm router={router} />
      </FormContext>
    </AuthPage>
  );
};

export default LogIn;
