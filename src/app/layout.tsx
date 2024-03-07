import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import './globals.css';
import Providers from '@/react-query/Providers';
import RecoilRootProvider from '@/recoil/RecoilRootProvider';
import { AlertContextProvider } from '@/contexts/AlertContext';

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
      <body className="flex flex-col w-full max-w-[1280px] mx-auto h-full">
        <RecoilRootProvider>
          <AlertContextProvider>
            <Providers>
              <Header />
              {children}
            </Providers>
          </AlertContextProvider>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
