import './globals.scss'
import Header from '@components/Header'

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
        <Header />
        {children}
      </body>
    </html>
  )
}
