'use client';

import { updateAccountInfo } from '@/api/mypageApi';

import InfoModifyButtons from '@/components/(auth)/(mypage)/(info)/InfoModifyButtons';
import InfoTextField from '@/components/(auth)/(mypage)/(info)/InfoTextField';
import ValidationMessage from '@/components/(auth)/ValidationMessage';

import authState from '@/recoil/authAtom';
import { useRecoilState } from 'recoil';

import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import useAlertContext from '@/hooks/useAlertContext';

import { useRouter } from 'next/navigation';

import { isPasswordCheck } from '@/utils/isValidationCheck';

const InfoModifyForm = () => {
  const [authStateValue, setAuthStateValue] = useRecoilState(authState);

  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [name, setName] = useState(authStateValue.myInfo.name);
  const [phoneNo, setPhoneNo] = useState(authStateValue.myInfo.phoneNo);

  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [isRePasswordFocus, setIsResetPasswordFocus] = useState(false);

  const router = useRouter();

  const { open, close } = useAlertContext();

  const checkPassword = useCallback(() => {
    if (newPassword === '') {
      setIsPasswordMatch(false);
    } else {
      if (newPassword !== rePassword) {
        setIsPasswordMatch(true);
      }

      if (newPassword === rePassword) {
        setIsPasswordMatch(false);
      }
    }
  }, [newPassword, rePassword]);

  const handleNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleRePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRePassword(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneNoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNo(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isPasswordMatch) {
      const response = await updateAccountInfo({
        email: authStateValue.myInfo.email,
        name,
        phoneNo,
        password: newPassword,
        isAgree: true,
        isAlert: true,
      });

      if (response.code === 200) {
        setAuthStateValue((prev) => ({
          ...prev,
          myInfo: {
            email: '',
            name: '',
            phoneNo: '',
            isAgree: false,
            isAlert: false,
          },
        }));

        open({
          title: '개인 정보가 수정되었습니다.',
          onRightButtonClick: () => {
            close();
          },
        });

        router.push('/mypage/info');
      }
    }
  };

  useEffect(() => {
    setIsPasswordValid(isPasswordCheck(newPassword));
    checkPassword();
  }, [checkPassword, newPassword, rePassword]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center w-full px-[20px] py-[10px]">
        <label
          htmlFor="name"
          id="name"
          className="w-[120px] text-[16px] font-semibold"
        >
          아이디
        </label>
        <span className="flex items-center w-[305px] h-[50px] pl-8 text-[16px]">
          {authStateValue.myInfo.email}
        </span>
      </div>
      <InfoTextField
        type="password"
        name="새 비밀번호"
        placeholder="새 비밀번호를 입력해주세요"
        value={newPassword}
        onChange={handleNewPasswordChange}
        onFocus={() => setIsPasswordFocus(true)}
      />
      {isPasswordFocus && !isPasswordValid && (
        <div className="flex flex-col justify-center items-center w-full ml-[10px]">
          <div className="ml-[20px]">
            <ValidationMessage text="영문/숫자/특수문자 2가지 이상 조합 (8~20자)" />
          </div>
          <ValidationMessage text="3개 이상 연속되거나 동일한 문자/숫자 제외" />
        </div>
      )}
      <InfoTextField
        type="password"
        name="새 비밀번호 확인"
        placeholder="새 비밀번호를 다시 입력해 주세요"
        value={rePassword}
        onChange={handleRePasswordChange}
        onFocus={() => setIsResetPasswordFocus(true)}
      />
      {isRePasswordFocus && isPasswordMatch && (
        <div className="flex justify-center">
          <ValidationMessage text="비밀번호와 동일하게 입력해주세요." />
        </div>
      )}
      <InfoTextField
        type="text"
        name="이름"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={handleNameChange}
      />
      <InfoTextField
        type="text"
        name="휴대폰"
        placeholder="휴대폰 번호를 입력해주세요"
        value={phoneNo}
        onChange={handlePhoneNoChange}
      />
      <InfoModifyButtons type="submit" />
    </form>
  );
};

export default InfoModifyForm;
