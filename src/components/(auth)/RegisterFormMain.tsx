'use client';

import { useContext } from 'react';
import AuthInput from './AuthInput';
import ValidationMessage from './ValidationMessage';
import ValidationMessages from './ValidationMessages';
import { FormValue, formContext } from '@/contexts/FormContext';

const RegisterFormMain = () => {
  const { isEnterUserInfo } = useContext(formContext) as FormValue;

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
            name="phone"
            placeholder="휴대폰 번호를 입력해주세요"
          />
          <ValidationMessages name="phone">
            <ValidationMessage text="휴대폰 번호를 정확하게 입력하세요. ( - 포함)" />
          </ValidationMessages>
        </>
      )}
    </>
  );
};

export default RegisterFormMain;
