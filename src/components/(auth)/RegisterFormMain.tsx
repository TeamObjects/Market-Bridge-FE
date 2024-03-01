'use client';

import AuthInput from '@/components/(auth)/AuthInput';
import ValidationMessage from '@/components/(auth)/ValidationMessage';
import ValidationMessages from '@/components/(auth)/ValidationMessages';

import { checkDuplicateEmail } from '@/api/authApi';
import { FormValue, formContext } from '@/contexts/FormContext';
import useDebounce from '@/hooks/useDebounce';

import { useCallback, useContext, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import authState from '@/recoil/authAtom';

const RegisterFormMain = () => {
  const [isDuplicateCheck, setIsDuplicateCheck] = useState(false);
  const { isEnterUserInfo, values } = useContext(formContext) as FormValue;
  const [_, setIsDuplicateEmail] = useRecoilState(authState);

  const debouncedEmail = useDebounce(values?.email, 300);

  const duplicateEmailCheck = useCallback(
    async (email: string | undefined) => {
      if (email) {
        const response = await checkDuplicateEmail(email);
        const checked = response.data.checked;
        setIsDuplicateCheck(checked);
        setIsDuplicateEmail(checked);
      }
    },
    [setIsDuplicateCheck, setIsDuplicateEmail],
  );

  useEffect(() => {
    duplicateEmailCheck(debouncedEmail);
  }, [debouncedEmail, duplicateEmailCheck]);

  if (isEnterUserInfo) return null;

  return (
    <>
      {!isEnterUserInfo && (
        <>
          <h1 className="my-6 text-3xl xs:text-xl">회원가입</h1>
          <AuthInput
            type="text"
            placeholder="아이디를 입력해주세요"
            name="email"
          />
          <ValidationMessages name="email">
            <ValidationMessage text="이메일을 형식에 맞게 입력해주세요." />
          </ValidationMessages>
          {isDuplicateCheck && (
            <ValidationMessage text="이미 가입된 이메일입니다." />
          )}
          <AuthInput
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <ValidationMessages name="password">
            <ValidationMessage text="영문/숫자/특수문자 2가지 이상 조합 (8~20자)" />
            <ValidationMessage text="3개 이상 연속되거나 동일한 문자/숫자 제외" />
          </ValidationMessages>
          <AuthInput
            type="text"
            name="name"
            placeholder="이름을 입력해주세요"
          />
          <ValidationMessages name="name">
            <ValidationMessage text="이름을 정확히 입력하세요. (2글자 이상, 숫자 제외)" />
          </ValidationMessages>
          <AuthInput
            type="text"
            name="phoneNo"
            placeholder="휴대폰 번호를 입력해주세요"
          />
          <ValidationMessages name="phoneNo">
            <ValidationMessage text="휴대폰 번호를 정확하게 입력하세요. ( - 제외)" />
          </ValidationMessages>
        </>
      )}
    </>
  );
};

export default RegisterFormMain;
