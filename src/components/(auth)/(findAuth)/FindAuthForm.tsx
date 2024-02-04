'use client';

import { usePathname, useRouter } from 'next/navigation';
import Button, { STYLE_BUTTON_DEFAULT } from '../../Button';
import FindAuthInput from './FindAuthInput';

const FindAuthForm = () => {
  const router = useRouter();
  const path = usePathname();
  const pathCheck = path === '/login/findPassword';

  return (
    <form>
      <FindAuthInput
        label="이름"
        type="text"
        name="name"
        placeholder="이름을 입력해주세요."
      />
      <FindAuthInput
        label="휴대폰 번호"
        type="text"
        name="phone"
        placeholder="휴대폰 번호를 입력해주세요."
      />
      <FindAuthInput
        label="인증번호 입력"
        type="text"
        name="authNumber"
        placeholder="인증번호 입력"
      />
      <Button
        text="인증번호 받기"
        style={`${STYLE_BUTTON_DEFAULT} mt-4 mb-20`}
        onClick={() =>
          router.push(
            pathCheck
              ? '/login/findPassword?complete=password'
              : '/login/findId?complete=id',
          )
        }
      />
    </form>
  );
};

export default FindAuthForm;
