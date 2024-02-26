'use client';

import { findId } from '@/api/authApi';
import { UserInfo } from '@/components/(auth)/RegisterForm';
import FormContext from '@/contexts/FormContext';
import authState from '@/recoil/authAtom';

import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';

interface FindAuthFormProps {
  children: ReactNode;
}

const FindAuthForm = ({ children }: FindAuthFormProps) => {
  const [_, setFoundId] = useRecoilState(authState);

  const handleFindAuthSubmit = async (values: UserInfo) => {
    const { name, phoneNo } = values;

    const response = await findId(name, phoneNo);

    const {
      data: { email },
    } = response;
    setFoundId((prev) => ({ ...prev, foundId: email }));
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
