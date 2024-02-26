'use client';

import { findId } from '@/api/authApi';
import { UserInfo } from '@/components/(auth)/RegisterForm';
import FormContext from '@/contexts/FormContext';

import { ReactNode } from 'react';

interface FindAuthFormProps {
  children: ReactNode;
}

const FindAuthForm = ({ children }: FindAuthFormProps) => {
  const handleFindAuthSubmit = async (values: UserInfo) => {
    const { name, phoneNo } = values;

    const response = await findId(name, phoneNo);
  };

  return (
    <FormContext
      formType="findAuth"
      id="findAuth-form"
      className=""
      onSubmit={handleFindAuthSubmit}
    >
      {children}
    </FormContext>
  );
};

export default FindAuthForm;
