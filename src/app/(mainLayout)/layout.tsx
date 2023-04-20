import '../globals.scss';
import Header from '@components/Header';
import Footer from '@components/Footer';
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
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={openSans.className}>
        <Suspense fallback={null}>
          <Header/>
            {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}