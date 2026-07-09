import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ravali Pala | IT Technical Recruiter',
  description:
    'IT Technical Recruiter with 1.5 years of experience in end-to-end recruitment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}