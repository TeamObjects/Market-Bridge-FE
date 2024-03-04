import Button from '@/components/shared/Button';

import { Metadata } from 'next';

import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Market Bridge MyPage',
  description: 'Market Bridge MyPage',
  icons: {
    icon: './favicon.ico',
  },
};

const MY_PAGE_MENU = [
  '주문 내역',
  '찜한 상품',
  '배송지 관리',
  '상품 후기',
  '개인 정보 수정',
];

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex">
      <div>
        <h1>마이브릿지</h1>
        <ul className="flex flex-col">
          {MY_PAGE_MENU.map((menu, index) => (
            <Button key={index} text={menu} />
          ))}
        </ul>
      </div>
      {children}
    </section>
  );
};

export default Layout;
