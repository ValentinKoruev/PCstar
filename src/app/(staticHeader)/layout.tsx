import '../globals.scss';
import Footer from '@components/Footer';
import StaticHeader from '@components/StaticHeader';
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
          <StaticHeader/>
            {children} 
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
