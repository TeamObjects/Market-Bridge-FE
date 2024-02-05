'use client';

import AuthDivider from '@/components/(auth)/AuthDivider';
import AuthHeader from '@/components/(auth)/AuthHeader';
import AuthPage from '@/components/(auth)/AuthPage';
import OAuthFooter from '@/components/(auth)/OAuthFooter';
import RegisterForm from '@/components/(auth)/RegisterForm';
import FormContext from '@/contexts/FormContext';
import { validationFunctions } from '@/utils/isValidationCheck';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/login');
  };

  return (
    <AuthPage
      header={<AuthHeader />}
      divider={<AuthDivider />}
      footer={<OAuthFooter />}
    >
      <span className="text-xl xs:text-[10px]">단계 1/2</span>

      <FormContext
        formType="register"
        id="register-form"
        className=""
        validate={validationFunctions}
        onSubmit={handleSubmit}
      >
        <RegisterForm />
      </FormContext>
    </AuthPage>
  );
};

export default Register;
