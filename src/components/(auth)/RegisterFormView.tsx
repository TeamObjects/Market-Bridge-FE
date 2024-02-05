import { FormValue } from '@/contexts/FormContext';
import AuthInput from './AuthInput';
import TermsOfUse from './TermsOfUse';
import ValidationMessage from './ValidationMessage';
import ValidationMessages from './ValidationMessages';
import Button from '../Button';

export interface UserInfo {
  email: string;
  password: string;
  name?: string;
  phone?: string;
  [key: string]: string | undefined;
}

const RegisterFormView = ({
  isEnterUserInfo,
  handleClickContinue,
}: FormValue) => {
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
      {isEnterUserInfo && (
        <>
          <TermsOfUse />
        </>
      )}
      {!isEnterUserInfo && <Button text="계속" onClick={handleClickContinue} />}
      {isEnterUserInfo && <Button text="가입하기" type="submit" />}
    </>
  );
};

export default RegisterFormView;
