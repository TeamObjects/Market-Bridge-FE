'use client';

import Button, { STYLE_BUTTON_DEFAULT } from '@/components/Button';

import { usePathname } from 'next/navigation';

const FindAuthButton = () => {
  const path = usePathname();

  return (
    <>
      {path === '/login/findPassword' && (
        <Button
          type="submit"
          text="비밀번호 재설정하기"
          style={`${STYLE_BUTTON_DEFAULT} mt-4 mb-20`}
        />
      )}
      {path === '/login/findId' && (
        <Button
          type="submit"
          text="아이디 찾기"
          style={`${STYLE_BUTTON_DEFAULT} mt-4 mb-20`}
        />
      )}
      {path === '/login/findPassword/changePassword' && (
        <Button
          type="submit"
          text="확인"
          style={`${STYLE_BUTTON_DEFAULT} mt-4 mb-20`}
        />
      )}
    </>
  );
};

export default FindAuthButton;
