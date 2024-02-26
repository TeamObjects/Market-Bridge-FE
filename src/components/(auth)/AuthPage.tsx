import AuthSection from '@/components/(auth)/AuthSection';
import WrapperPage from '@/components/(auth)/WrapperPage';

import { ReactNode } from 'react';

export interface PageComponentProps {
  header: ReactNode;
  children: ReactNode;
  divider?: ReactNode;
  footer?: ReactNode;
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
        <WrapperPage>
          <header className="mx-auto my-6">{header}</header>
          <main>{children}</main>
          <div className="flex justify-center items-center mt-6 mb-10">
            {divider}
          </div>
          <div className="flex justify-center items-center w-full mb-10">
            {footer}
          </div>
        </WrapperPage>
      </AuthSection>
    </div>
  );
};

export default AuthPage;
