import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Poppins({
  subsets: ['latin'],
  weight: '200',
});

export const metadata: Metadata = {
  title: 'Cuy Anime List',
  description: 'Cuy anime list adalah anime list yang.......... udahlah gatau........',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-color-dark`}>
        {/* <body className={`${inter.className} dark:bg-slate-600 dark:text-white`}> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
