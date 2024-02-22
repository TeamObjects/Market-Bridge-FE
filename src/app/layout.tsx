import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';
import Providers from '@/react-query/Providers';

export const metadata: Metadata = {
  title: 'Market Bridge',
  description: 'Market Bridge',
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto h-full">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
