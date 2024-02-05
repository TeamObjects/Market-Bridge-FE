'use client';

import { FormValue, formContext } from '@/contexts/FormContext';
import { useContext } from 'react';

import RegisterFormView from './RegisterFormView';

export interface UserInfo {
  email: string;
  password: string;
  name?: string;
  phone?: string;
  [key: string]: string | undefined;
}

const RegisterForm = () => {
  const { handleClickContinue, isEnterUserInfo } = useContext(
    formContext,
  ) as FormValue;

  return (
    <>
      <RegisterFormView
        isEnterUserInfo={isEnterUserInfo}
        handleClickContinue={handleClickContinue}
      />
    </>
  );
};

export default RegisterForm;
