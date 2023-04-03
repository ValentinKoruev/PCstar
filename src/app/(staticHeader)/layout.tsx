import '../globals.scss';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { prisma } from '@server/db/client';

export const metadata = {
  title: 'PC STORE',
  description: 'TOP COMPUTERS AND PARTS',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const categories = await prisma.category.findMany({
    where: {
      parent: {
        contains: '/computers'
      }
    }
  })

  const items = [];

  for(let cat of categories) {
    items.push(
      {
        header: { text: cat.title, href: `/catalog/${cat.category}`},
        content: cat.tags.map(tag => {
          return { text: tag, href: `/catalog/${cat.category}?query=${tag}`}
        })
      }
    )
  }

  return (
    <html lang="en">
      <body>
        <Header isStatic={true} computerItems={items}/>
          {children}
        <Footer />
      </body>
    </html>
  )
}
