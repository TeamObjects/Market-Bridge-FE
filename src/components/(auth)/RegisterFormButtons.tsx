'use client';

import Button from '@/components/Button';

import { FormValue, formContext } from '@/contexts/FormContext';

import { useContext } from 'react';

const RegisterFormButtons = () => {
  const { isEnterUserInfo, handleClickContinue } = useContext(
    formContext,
  ) as FormValue;

  return (
    <>
      {!isEnterUserInfo && <Button text="계속" onClick={handleClickContinue} />}
      {isEnterUserInfo && <Button text="가입하기" type="submit" />}
    </>
  );
};

export default RegisterFormButtons;
