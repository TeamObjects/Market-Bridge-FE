import { ReactNode } from 'react';

export interface PageComponentProps {
  header: ReactNode;
  children: ReactNode;
  divider?: ReactNode;
}

const MyBridgePage = ({ header, children, divider }: PageComponentProps) => {
  return (
    <div>
      <header>{header}</header>
      <div className="flex justify-center items-center my-6">{divider}</div>
      <main>{children}</main>
    </div>
  );
};

export default MyBridgePage;
