'use client';

import { UserInfo } from '@/components/(auth)/RegisterForm';

import { loginUser } from '@/api/authApi';
import FormContext from '@/contexts/FormContext';
import { validationFunctions } from '@/utils/isValidationCheck';
import { setLocalToken } from '@/utils/localToken';

import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';

import { ReactNode } from 'react';
import useAlertContext from '@/hooks/useAlertContext';

export type LoginUserInfo = {
  email: UserInfo['email'];
  password: UserInfo['password'];
};

const LogInForm = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { open } = useAlertContext();

  const { mutate: login } = useMutation({
    mutationFn: loginUser,
    onSuccess: ({ code, data: { accessToken } }) => {
      if (code === 200) {
        setLocalToken(accessToken);
        router.push('/');
      }
    },
    onError: (error) => {
      open({
        title: '아이디나 비밀번호가 잘못 입력되었습니다.',
        onRightButtonClick: () => {
          console.error(error);
        },
      });
    },
  });

  const handleLoginSubmit = (values: LoginUserInfo) => {
    const { email, password } = values;
    login({ email, password });
  };

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
