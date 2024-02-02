import Image from 'next/image';
import { BridgeLogo } from '../../../public/svgs';

const AuthHeader = () => {
  return (
    <header className="mx-auto mt-4">
      <Image
        src={BridgeLogo}
        alt="로고 이미지"
        className="w-[19rem] h-[7rem]"
      />
    </header>
  );
};

export default AuthHeader;
