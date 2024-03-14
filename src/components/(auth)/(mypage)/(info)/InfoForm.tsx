'use client';

import { findEmailInfo, getAccountInfo } from '@/api/mypageApi';

import InfoTextField from '@/components/(auth)/(mypage)/(info)/InfoTextField';

import { useQuery } from '@tanstack/react-query';

import { ChangeEvent, FormEvent, useState } from 'react';

import { useRouter } from 'next/navigation';
import InfoButton from './InfoButton';
import useAlertContext from '@/hooks/useAlertContext';

const InfoForm = () => {
  const [password, setPassword] = useState('');

  const router = useRouter();

  const { data } = useQuery({
    queryKey: ['account'],
    queryFn: findEmailInfo,
  });

  const email = data?.data.email;

  const { data: accountData } = useQuery({
    queryKey: ['account'],
    queryFn: () => getAccountInfo(password),
  });

  const { open, close } = useAlertContext();

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.trim().length > 0) {
      const response = await getAccountInfo(password);

      if (response.code === 200) {
        router.push('/mypage/info/modify');
      }
    } else {
      open({
        title: '비밀번호를 입력해주세요.',
        onRightButtonClick: () => {
          close();
        },
      });
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-center items-center w-full px-[20px] py-[10px]">
        <label
          htmlFor="name"
          id="name"
          className="w-[120px] text-[16px] font-semibold"
        >
          아이디
        </label>
        <span className="flex items-center w-[305px] h-[50px] pl-8 text-[16px]">
          {email}
        </span>
      </div>
      <InfoTextField
        type="password"
        name="비밀번호"
        placeholder="현재 비밀번호를 입력해주세요"
        onChange={handlePasswordChange}
      />
      <InfoButton type="submit" />
    </form>
  );
};

export default InfoForm;
