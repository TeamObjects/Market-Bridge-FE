import type { Metadata } from 'next';
import './globals.css';

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
        {children}
      </body>
    </html>
  );
}
