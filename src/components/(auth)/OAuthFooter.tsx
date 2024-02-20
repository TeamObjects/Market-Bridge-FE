import {
  AppleLogo,
  GoogleLogo,
  KakaoLogo,
  NaverLogo,
} from '../../../public/svgs';
import OAuthButton from './OAuthButton';

const OAuthFooter = () => {
  return (
    <div className="flex justify-evenly w-full">
      <OAuthButton type={GoogleLogo} />
      <OAuthButton type={KakaoLogo} />
      <OAuthButton type={NaverLogo} />
      <OAuthButton type={AppleLogo} />
    </div>
  );
};

export default OAuthFooter;
