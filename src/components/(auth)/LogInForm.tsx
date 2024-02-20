'use client';

import FormContext from '@/contexts/FormContext';
import { validationFunctions } from '@/utils/isValidationCheck';
import { ReactNode } from 'react';

const LogInForm = ({ children }: { children: ReactNode }) => {
  return (
    <FormContext
      formType="login"
      id="login-form"
      className=""
      validate={validationFunctions}
    >
      {children}
    </FormContext>
  );
};

export default LogInForm;
