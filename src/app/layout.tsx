import type { Metadata } from 'next';

import './normalize.css';
import './main.scss';
// import './globals.css';

import 'font-awesome/css/font-awesome.min.css';
import { Vollkorn } from 'next/font/google';

const inter = Vollkorn({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alaa ElSaman - Software Engineer',
  description: 'Github page',
  openGraph: {
    title: 'Alaa ElSaman',
    description: 'Github Page Profile',
    url: 'aelsaman.github.io',
    images: ['aelsaman.github.io/images/github-mark-120px-plus.png'],
    siteName: 'Software Engineer'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
