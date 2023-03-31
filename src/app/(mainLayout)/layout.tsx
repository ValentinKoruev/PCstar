import '../globals.scss';
import Header from '@components/Header';
import Footer from '@components/Footer';

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
      <body>
        <Header isStatic={false}/>
        {children}
        <Footer />
      </body>
    </html>
  )
}