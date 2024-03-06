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
      <div className="flex justify-center items-center mt-6 mb-10">
        {divider}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default MyBridgePage;
