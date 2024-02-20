import { ReactNode } from 'react';

const STYLE_SECTION_DEFAULT =
  'flex justify-center items-center w-[400px] xs:w-full h-full';

interface SectionProps {
  className?: string;
  children: ReactNode;
}

const AuthSection = ({
  className = STYLE_SECTION_DEFAULT,
  children,
}: SectionProps) => {
  return <section className={className}>{children}</section>;
};

export default AuthSection;
