'use client';

import useForm from '@/hooks/useForm';
import {
  isEmailCheck,
  isNameCheck,
  isPasswordCheck,
  isPhoneCheck,
} from '@/utils/isValidationCheck';
import { useRouter } from 'next/navigation';
import Button from '../Button';
import AuthInput from './AuthInput';
import TermsOfUse from './TermsOfUse';
import ValidationMessage from './ValidationMessage';
import ValidationMessages from './ValidationMessages';

export interface UserInfo {
  email: string;
  password: string;
  name?: string;
  phone?: string;
  [key: string]: string | undefined;
}

export interface ValidationFunctions {
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

  const onSubmit = () => {
    if (isEnterUserInfo) router.push('/login');
  };

  const {
    isValid,
    isEmpty,
    isEnterUserInfo,
    handleClickContinue,
    handleChange,
    handleSubmit,
  } = useForm({
    formType: 'register',
    onSubmit,
    validate: validationFunctions,
  });

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="my-6 text-3xl xs:text-xl">회원가입</h1>
      {!isEnterUserInfo && (
        <>
          <AuthInput
            type="text"
            placeholder="아이디를 입력해주세요"
            name="email"
            onChange={handleChange}
          />
          {!isValid.email && !isEmpty.email && (
            <ValidationMessage text="이메일을 형식에 맞게 입력해주세요." />
          )}
          <AuthInput
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={handleChange}
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
            onChange={handleChange}
          />
          {!isValid.name && !isEmpty.name && (
            <ValidationMessage text="이름을 정확히 입력하세요. (2글자 이상, 숫자 제외)" />
          )}
          <AuthInput
            type="text"
            name="phone"
            placeholder="휴대폰 번호를 입력해주세요"
            onChange={handleChange}
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
