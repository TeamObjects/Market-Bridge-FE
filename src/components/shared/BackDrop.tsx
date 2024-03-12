import { ReactNode } from 'react';

interface BackDropProps {
  children: ReactNode;
  onClose?: () => void;
}

const BACK_DROP_STYLE =
  'fixed top-[0] right-[0] bottom-[0] left-[0] bg-[rgba(0,0,0,0.7)] z-backdrop';

const BackDrop = ({ children, onClose }: BackDropProps) => {
  const handleBackDropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose && onClose();
    }
  };

  return (
    <div className={BACK_DROP_STYLE} onClick={handleBackDropClick}>
      {children}
    </div>
  );
};

export default BackDrop;
