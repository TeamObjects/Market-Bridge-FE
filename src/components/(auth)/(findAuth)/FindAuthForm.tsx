'use client';

import { findId, findPassword, resetPassword } from '@/api/authApi';
import { UserInfo } from '@/components/(auth)/RegisterForm';
import FormContext from '@/contexts/FormContext';
import authState from '@/recoil/authAtom';

import { useRecoilState } from 'recoil';

import { ReactNode } from 'react';

import { usePathname, useRouter } from 'next/navigation';
interface FindAuthFormProps {
  children: ReactNode;
}

const FindAuthForm = ({ children }: FindAuthFormProps) => {
  const [state, setState] = useRecoilState(authState);

  const router = useRouter();
  const path = usePathname();

  const handleFindAuthSubmit = async (values: UserInfo) => {
    const { name, phoneNo, email, password } = values;

    if (path === '/login/findId') {
      const response = await findId(name, phoneNo);

      if (response.code === 200) {
        const {
          data: { email: foundId },
        } = response;
        setState((prev) => ({ ...prev, foundId }));
        router.push('/login/findId?complete=id');
      }
    }

    if (path === '/login/findPassword') {
      const response = await findPassword(name, email);

      if (response.code === 200) {
        const {
          data: { memberId },
        } = response;

        setState((prev) => ({ ...prev, memberId }));
        router.push('/login/findPassword/changePassword');
      }
    }

    if (path === '/login/findPassword/changePassword') {
      const response = await resetPassword(state.memberId, password);

      if (response.code === 200) {
        router.push('/login/findPassword?complete=password');
      }
    }
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
