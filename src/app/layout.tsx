import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Market Bridge',
  description: 'Market Bridge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
