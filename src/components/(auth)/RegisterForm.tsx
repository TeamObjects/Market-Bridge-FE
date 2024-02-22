'use client';

import { registerUser } from '@/api/authApi';
import FormContext from '@/contexts/FormContext';
import { validationFunctions } from '@/utils/isValidationCheck';
import { useMutation } from '@tanstack/react-query';
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
  const {
    mutate: register,
    isError,
    error,
  } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => console.log('회원가입 성공', data),
    onError: (error) => console.error('회원가입 실패', error),
  });

  const handleRegisterSubmit = (values: UserInfo) => {
    register({ ...values, isAgree: true });
  };

  if (isError) return <div>error: {error.message}</div>;

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
