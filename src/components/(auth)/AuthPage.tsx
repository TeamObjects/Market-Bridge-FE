import { ReactNode } from 'react';
import AuthSection from './AuthSection';

const STYLE_BOX_SHADOW =
  'shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]';

interface PageComponentProps {
  header: ReactNode;
  children: ReactNode;
  divider: ReactNode;
  footer: ReactNode;
}

const AuthPage = ({
  header,
  children,
  divider,
  footer,
}: PageComponentProps) => {
  return (
    <div className="flex justify-center items-center h-dvh">
      <AuthSection>
        <div
          className={`flex flex-col px-20 rounded-[20px] ${STYLE_BOX_SHADOW} xs:w-full xs:h-dvh xs:rounded-none`}
        >
          <header className="mx-auto my-6">{header}</header>
          <main>{children}</main>
          <div className="flex justify-center items-center mt-6 mb-10">
            {divider}
          </div>
          <div className="flex justify-center items-center w-full mb-10">
            {footer}
          </div>
        </div>
      </AuthSection>
    </div>
  );
};

export default AuthPage;
