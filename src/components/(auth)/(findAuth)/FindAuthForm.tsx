'use client';

import FindAuthButton from '@/components/(auth)/(findAuth)/FindAuthButton';
import FindAuthInput from '@/components/(auth)/(findAuth)/FindAuthInput';

import { usePathname } from 'next/navigation';

const FindAuthForm = () => {
  const path = usePathname();

  return (
    <>
      <FindAuthInput
        label="이름"
        type="text"
        name="name"
        placeholder="이름을 입력해주세요."
      />
      <FindAuthInput
        label={path === '/login/findId' ? '휴대폰 번호' : '이메일'}
        type="text"
        name="phone"
        placeholder="휴대폰 번호를 입력해주세요."
      />
      <FindAuthButton />
    </>
  );
};

export default FindAuthForm;
