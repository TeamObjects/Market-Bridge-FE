'use client';

import { loginUser } from '@/api/authApi';
import FormContext from '@/contexts/FormContext';
import { validationFunctions } from '@/utils/isValidationCheck';
import { useMutation } from '@tanstack/react-query';
import { UserInfo } from '@/components/(auth)/RegisterForm';
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { setLocalToken } from '@/utils/localToken';

export type LoginUserInfo = {
  email: UserInfo['email'];
  password: UserInfo['password'];
};

const LogInForm = ({ children }: { children: ReactNode }) => {
  const {
    mutate: login,
    isError,
    error,
  } = useMutation({
    mutationFn: loginUser,
    onSuccess: ({ code, data: { accessToken } }) => {
      if (code === 200) {
        setLocalToken(accessToken);
        router.push('/');
      }
    },
    onError: (error) => console.error('로그인 실패', error),
  });
  const router = useRouter();

  const handleLoginSubmit = (values: LoginUserInfo) => {
    const { email, password } = values;
    login({ email, password });
  };

  if (isError) return <div>error: {error.message}</div>;

  return (
    <FormContext
      formType="login"
      id="login-form"
      className=""
      validate={validationFunctions}
      onSubmit={handleLoginSubmit}
    >
      {children}
    </FormContext>
  );
};

export default LogInForm;
