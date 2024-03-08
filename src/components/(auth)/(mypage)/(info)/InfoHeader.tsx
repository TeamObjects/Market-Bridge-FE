'use client';

import { usePathname } from 'next/navigation';

const InfoHeader = () => {
  const path = usePathname();

  return (
    <div>
      <h1 className="text-[26px]">개인 정보 수정</h1>
      {path === '/mypage/info' && (
        <div className="mt-10">
          <h3 className="text-[20px] font-semibold">비밀번호 재확인</h3>
          <p className="mt-4 text-[15px] text-gray-700">
            회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번
            확인해주세요.
          </p>
        </div>
      )}
    </div>
  );
};

export default InfoHeader;
