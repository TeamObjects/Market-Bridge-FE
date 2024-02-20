import Image from 'next/image';
import { BridgeLogo } from '../../../public/svgs';
import Link from 'next/link';

const AuthHeader = () => {
  return (
    <Link href="/">
      <Image
        src={BridgeLogo}
        alt="로고 이미지"
        className="w-[19rem] h-[7rem] cursor-pointer"
      />
    </Link>
  );
};

export default AuthHeader;
