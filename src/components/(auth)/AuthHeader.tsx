'use client';

import Image from 'next/image';
import { BridgeLogo } from '../../../public/svgs';
import { useRouter } from 'next/navigation';

const AuthHeader = () => {
  const router = useRouter();

  return (
    <header className="mx-auto mt-4">
      <Image
        src={BridgeLogo}
        alt="로고 이미지"
        className="w-[19rem] h-[7rem] cursor-pointer"
        onClick={() => router.push('/')}
      />
    </header>
  );
};

export default AuthHeader;
