'use client';

import FindAuthButton from '@/components/(auth)/(findAuth)/FindAuthButton';
import FindAuthInput from '@/components/(auth)/(findAuth)/FindAuthInput';
import { FormValue, formContext } from '@/contexts/FormContext';
import { useCallback, useContext, useEffect, useState } from 'react';
import ValidationMessage from '../ValidationMessage';

const ChangePasswordForm = () => {
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const { values, setIsResetPasswordCheck } = useContext(
    formContext,
  ) as FormValue;

  const checkPassword = useCallback(() => {
    if (values?.password === '') {
      setIsPasswordValid(false);
    } else {
      if (values?.password !== values?.rePassword) {
        setIsPasswordValid(true);
      }

      if (values?.password === values?.rePassword) {
        setIsPasswordValid(false);
      }
    }
  }, [values?.password, values?.rePassword]);

  useEffect(() => {
    setIsResetPasswordCheck && setIsResetPasswordCheck(isPasswordValid);
  }, [setIsResetPasswordCheck, isPasswordValid]);

  useEffect(() => {
    checkPassword();
  }, [checkPassword, values?.password, values?.rePassword]);

  return (
    <>
      <FindAuthInput
        label="비밀번호"
        type="password"
        name="password"
        placeholder="이름을 입력해주세요."
      />
      <FindAuthInput
        label="비밀번호 재입력"
        type="password"
        name="rePassword"
        placeholder="휴대폰 번호를 입력해주세요."
      />
      {isPasswordValid && (
        <ValidationMessage text="비밀번호와 동일하게 입력해주세요." />
      )}
      <FindAuthButton />
    </>
  );
};

export default ChangePasswordForm;
