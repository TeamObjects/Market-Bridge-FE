'use client';

import { useContext } from 'react';
import Button from '../Button';
import { FormValue, formContext } from '@/contexts/FormContext';

const RegisterFormButtons = () => {
  const { isEnterUserInfo, handleClickContinue, values } = useContext(
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
