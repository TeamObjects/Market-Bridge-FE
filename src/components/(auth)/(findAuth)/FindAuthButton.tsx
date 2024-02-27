'use client';

import Button, { STYLE_BUTTON_DEFAULT } from '@/components/shared/Button';
import { FormValue, formContext } from '@/contexts/FormContext';

import { usePathname } from 'next/navigation';
import { useContext } from 'react';

const FindAuthButton = () => {
  const path = usePathname();

  const { isResetPasswordCheck } = useContext(formContext) as FormValue;

  console.log(isResetPasswordCheck);

  return (
    <>
      {path === '/login/findPassword' && (
        <Button
          type="submit"
          text="비밀번호 재설정하기"
          style={`${STYLE_BUTTON_DEFAULT} mt-4 mb-20`}
        />
      )}
      {path === '/login/findId' && (
        <Button
          type="submit"
          text="아이디 찾기"
          style={`${STYLE_BUTTON_DEFAULT} mt-4 mb-20`}
        />
      )}
      {path === '/login/findPassword/changePassword' && (
        <Button
          type="submit"
          text="확인"
          style={`${
            isResetPasswordCheck ? 'opacity-50 cursor-not-allowed' : ''
          } ${STYLE_BUTTON_DEFAULT} mt-4 mb-20`}
          disabled={isResetPasswordCheck}
        />
      )}
    </>
  );
};

export default FindAuthButton;
