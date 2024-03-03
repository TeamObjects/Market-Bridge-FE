import { ReactNode } from 'react';

interface BackDropProps {
  children: ReactNode;
}

const BACK_DROP_STYLE =
  'fixed top-[0] right-[0] bottom-[0] left-[0] bg-[rgba(0,0,0,0.7)] z-backdrop';

const BackDrop = ({ children }: BackDropProps) => {
  return <div className={BACK_DROP_STYLE}>{children}</div>;
};

export default BackDrop;
