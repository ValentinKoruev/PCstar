import '../globals.scss';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { Suspense } from 'react';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['cyrillic', 'latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif']
})


export const metadata = {
  title: 'PC STORE',
  description: 'TOP COMPUTERS AND PARTS',
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