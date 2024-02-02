'use client';

import React, { useState } from 'react';
import Button from '../Button';
import AuthInput from './AuthInput';
import TermsOfUse from './TermsOfUse';

const RegisterForm = () => {
  const [isEnterUserInfo, setIsEnterUserInfo] = useState(false);

  const handleContinueClick = () => {
    setIsEnterUserInfo(true);
  };
  return (
    <form>
      <h1 className="my-6 text-3xl xs:text-xl">회원가입</h1>
      {!isEnterUserInfo && (
        <>
          <AuthInput type="text" placeholder="아이디를 입력해주세요" />
          <AuthInput type="password" placeholder="비밀번호를 입력해주세요" />
          <AuthInput type="text" placeholder="이름을 입력해주세요" />
          <AuthInput type="text" placeholder="휴대폰 번호를 입력해주세요" />
        </>
      )}
      {isEnterUserInfo && (
        <>
          <TermsOfUse />
        </>
      )}
      {!isEnterUserInfo && <Button text="계속" onClick={handleContinueClick} />}
      {isEnterUserInfo && <Button text="가입하기" />}
    </form>
  );
};

export default RegisterForm;
