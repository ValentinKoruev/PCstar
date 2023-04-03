import '../globals.scss';
import Header from '@components/Header';
import Footer from '@components/Footer';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header isStatic={false} />
          {children}
        <Footer />
      </body>
    </html>
  )
}