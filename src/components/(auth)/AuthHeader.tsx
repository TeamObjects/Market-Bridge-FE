'use client';

import Image from 'next/image';
import { BridgeLogo } from '../../../public/svgs';
import { useRouter } from 'next/navigation';

const AuthHeader = () => {
  const router = useRouter();

  return (
    <>
      <Image
        src={BridgeLogo}
        alt="로고 이미지"
        className="w-[19rem] h-[7rem] cursor-pointer"
        onClick={() => router.push('/')}
      />
    </>
  );
};

export default AuthHeader;
