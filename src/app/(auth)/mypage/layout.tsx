import MyPageNav from '@/components/(auth)/(mypage)/MyPageNav';

import { Metadata } from 'next';

import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Market Bridge MyPage',
  description: 'Market Bridge MyPage',
  icons: {
    icon: './favicon.ico',
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex pt-[50px]">
      <MyPageNav />
      <article className="w-full pt-[5px] pl-[25px] bg-gray-50">
        {children}
      </article>
    </section>
  );
};

export default Layout;
