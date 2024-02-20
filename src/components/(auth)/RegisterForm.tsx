'use client';

import FormContext from '@/contexts/FormContext';
import { validationFunctions } from '@/utils/isValidationCheck';
import { ReactNode } from 'react';

export interface UserInfo {
  email: string;
  password: string;
  name?: string;
  phone?: string;
  [key: string]: string | undefined;
}

const RegisterForm = ({ children }: { children: ReactNode }) => {
  return (
    <FormContext
      formType="register"
      id="register-form"
      className=""
      validate={validationFunctions}
    >
      {' '}
      {children}
    </FormContext>
  );
};

export default RegisterForm;
