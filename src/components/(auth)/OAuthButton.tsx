import Image from 'next/image';
import { GoogleLogo, KakaoLogo } from '../../../public/svgs';

const STYLE_OAUTH_BUTTON =
  'flex justify-center items-center w-[40px] h-[40px] xs:w-[37x] xs:h-[37px] border-[1px] border-gray-500 rounded-full';

const OAuthButton = ({ type }: { type: string }) => {
  return (
    <button
      className={
        type === GoogleLogo || type === KakaoLogo
          ? `${STYLE_OAUTH_BUTTON} p-2`
          : STYLE_OAUTH_BUTTON
      }
    >
      <Image src={type} alt="구글 로고 이미지" />
    </button>
  );
};

export default OAuthButton;
