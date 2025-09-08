import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteContent } from '@/data/content';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${siteContent.global.siteName} - ${siteContent.global.tagline}`,
  description: 'Learn to code websites, apps, and games with interactive courses, hands-on projects, and expert guidance. Start your coding journey today.',
  keywords: 'coding, programming, web development, learn to code, online courses, javascript, python, html, css',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}