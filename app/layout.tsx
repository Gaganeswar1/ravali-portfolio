import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gaganeswar Pilli | Snowflake Engineer',

  description:
    'Snowflake Engineer with 3+ years of experience in Snowflake Administration, Security, Automation, Production Support, AWS Cloud and Enterprise Platform Management.',

  keywords: [
    'Snowflake',
    'Snowflake Engineer',
    'Snowflake Administrator',
    'Snowflake Developer',
    'AWS',
    'SQL',
    'Cloud',
    'RBAC',
    'Automation',
    'Production Support',
    'SnowPro',
  ],

  authors: [
    {
      name: 'Gaganeswar Pilli',
    },
  ],

  creator: 'Gaganeswar Pilli',

  applicationName: 'Gaganeswar Portfolio',

  openGraph: {
    title: 'Gaganeswar Pilli | Snowflake Engineer',

    description: 'Snowflake Administration • Automation • Security • AWS',

    type: 'website',

    locale: 'en_US',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
