'use client';

import { registerUser } from '@/api/authApi';
import FormContext from '@/contexts/FormContext';
import useAlertContext from '@/hooks/useAlertContext';
import { validationFunctions } from '@/utils/isValidationCheck';

import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';

import { ReactNode } from 'react';

export interface UserInfo {
  email: string;
  password: string;
  name?: string;
  phoneNo?: string;
  isAgree: boolean;
  [key: string]: string | boolean | undefined;
}

const RegisterForm = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { open } = useAlertContext();

  const { mutate: register } = useMutation({
    mutationFn: registerUser,
    onSuccess: ({ code, message }) => {
      if (code === 201) router.push('/login');
      console.log('회원가입 성공', message);
    },
    onError: (error) => console.error('회원가입 실패', error),
  });

  const handleRegisterSubmit = (values: UserInfo) => {
    const { isAgree } = values;

    if (!isAgree) {
      open({
        title: '필수 동의사항에 체크해주세요.',
      });
    } else {
      register(values);
    }
  };

  return (
    <FormContext
      formType="register"
      id="register-form"
      className=""
      validate={validationFunctions}
      onSubmit={handleRegisterSubmit}
    >
      {' '}
      {children}
    </FormContext>
  );
};

export default RegisterForm;
