'use client';

import Button from '@/components/shared/Button';

import { FormValue, formContext } from '@/contexts/FormContext';
import authState from '@/recoil/authAtom';

import { useContext, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const RegisterFormButtons = () => {
  const { isEnterUserInfo, isValid, handleClickContinue } = useContext(
    formContext,
  ) as FormValue;
  const [isAllValidCheck, setIsAllValidCheck] = useState(false);

  const [isDuplicateEmail, _] = useRecoilState(authState);

  useEffect(() => {
    if (isValid) {
      setIsAllValidCheck(
        Object.values(isValid).every((value) => value === true),
      );
    }
  }, [isValid]);

  return (
    <>
      {!isEnterUserInfo && (
        <Button
          text="계속"
          onClick={handleClickContinue}
          disabled={!!isDuplicateEmail || !isAllValidCheck}
        />
      )}
      {isEnterUserInfo && <Button text="가입하기" type="submit" />}
    </>
  );
};

export default RegisterFormButtons;
