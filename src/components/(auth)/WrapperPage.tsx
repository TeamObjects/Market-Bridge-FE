import { ReactNode } from 'react';

export const STYLE_BOX_SHADOW =
  'shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]';

const WrapperPage = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`flex flex-col px-20 rounded-[20px] ${STYLE_BOX_SHADOW} w-full xs:w-full xs:h-dvh xs:rounded-none`}
    >
      {children}
    </div>
  );
};

export default WrapperPage;
