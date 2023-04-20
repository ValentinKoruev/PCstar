import '../globals.scss';
import Footer from '@components/Footer';
import StaticHeader from '@components/StaticHeader';
import { Suspense } from 'react';
import { Open_Sans } from 'next/font/google';
import { Metadata } from 'next';

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['cyrillic', 'latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif']
})


export const metadata : Metadata = {
  title: 'PCstar - онлайн магазин за техника',
  description: 'В PCstar ще намерите компютри, лаптопи, телефони, телевизори и всякаква друга техника на достъпни и изгодни цени.',
  keywords: ["PCstar", "техника", "компютри", "лаптопи", "компютърни части", "геймърски компютри"],
  robots: {
    index: false,
    follow: false
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg">
      <body className={openSans.className}>
        <Suspense fallback={null}>
          <StaticHeader/>
            {children} 
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
