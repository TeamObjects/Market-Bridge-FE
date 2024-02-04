'use client';

import {
  isEmailCheck,
  isNameCheck,
  isPasswordCheck,
  isPhoneCheck,
} from '@/utils/isValidationCheck';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, MouseEventHandler, useState } from 'react';
import Button from '../Button';
import AuthInput from './AuthInput';
import TermsOfUse from './TermsOfUse';
import ValidationMessage from './ValidationMessage';
import ValidationMessages from './ValidationMessages';

interface UserInfo {
  email: string;
  password: string;
  name: string;
  phone: string;
}

interface ValidationFunctions {
  [key: string]: (val1: string) => boolean;
}

const validationFunctions: ValidationFunctions = {
  email: isEmailCheck,
  password: isPasswordCheck,
  name: isNameCheck,
  phone: isPhoneCheck,
};

const RegisterForm = () => {
  const router = useRouter();
  const [isEnterUserInfo, setIsEnterUserInfo] = useState(false);
  const [userValue, setUserValue] = useState<UserInfo>({
    email: '',
    password: '',
    name: '',
    phone: '',
  });
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
    name: false,
    phone: false,
  });
  const [isEmpty, setIsEmpty] = useState({
    email: true,
    password: true,
    name: true,
    phone: true,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (value !== '') {
      setIsEmpty((prev) => ({ ...prev, [name]: false }));
    }

    setUserValue((prev) => ({ ...prev, [name]: value }));

    const isValidFunction = validationFunctions[name];
    if (isValidFunction) {
      const isValid = isValidFunction(value);
      setIsValid((prev) => ({ ...prev, [name]: isValid }));
    }
  };

  const handleClickContinue: MouseEventHandler<HTMLButtonElement> = (e) => {
    const isEnteredAllUserInfo = Object.values(userValue).every(
      (value) => value !== '',
    );
    setIsEnterUserInfo(isEnteredAllUserInfo);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEnterUserInfo) router.push('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="my-6 text-3xl xs:text-xl">회원가입</h1>
      {!isEnterUserInfo && (
        <>
          <AuthInput
            type="text"
            name="email"
            placeholder="아이디를 입력해주세요"
            onChange={handleInputChange}
          />
          {!isValid.email && !isEmpty.email && (
            <ValidationMessage text="이메일을 형식에 맞게 입력해주세요." />
          )}
          <AuthInput
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={handleInputChange}
          />
          {!isValid.password && !isEmpty.password && (
            <ValidationMessages>
              <ValidationMessage text="영문/숫자/특수문자 2가지 이상 조합 (8~20자)" />
              <ValidationMessage text="3개 이상 연속되거나 동일한 문자/숫자 제외" />
            </ValidationMessages>
          )}
          <AuthInput
            type="text"
            name="name"
            placeholder="이름을 입력해주세요"
            onChange={handleInputChange}
          />
          {!isValid.name && !isEmpty.name && (
            <ValidationMessage text="이름을 정확히 입력하세요. (2글자 이상, 숫자 제외)" />
          )}
          <AuthInput
            type="text"
            name="phone"
            placeholder="휴대폰 번호를 입력해주세요"
            onChange={handleInputChange}
          />
          {!isValid.phone && !isEmpty.phone && (
            <ValidationMessage text="휴대폰 번호를 정확하게 입력하세요. ( - 포함)" />
          )}
        </>
      )}
      {isEnterUserInfo && (
        <>
          <TermsOfUse />
        </>
      )}
      {!isEnterUserInfo && <Button text="계속" onClick={handleClickContinue} />}
      {isEnterUserInfo && <Button text="가입하기" type="submit" />}
    </form>
  );
};

export default RegisterForm;
