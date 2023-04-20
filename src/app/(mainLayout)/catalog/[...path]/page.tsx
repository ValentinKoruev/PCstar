import { notFound } from 'next/navigation';
import { prisma } from "@server/db/client"

import styles from './page.module.scss'
import ItemShowList, { ItemType } from '@components/UI/ItemShowList';

import { Metadata } from 'next';

type Props = {
    params: { path: string[]},
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {

    const category = await prisma.category.findFirst({
        where: {
            category: `/${params.path.join('/')}`
        }
    })

  return {
    title: `${category?.title} - PCstar`,
  };
}

export default async function Page({
    params,
} : Props) {

   
    const category = await prisma.category.findFirst({
        where: {
            category: `/${params.path.join('/')}`
        }
    })

    if(!category) notFound();


    const items = await prisma.item.findMany({
        where: {
            categories: {
                has: category.category
            }, 
        }, 
        select: {
            id: true,
            title: true,
            price: true,
            prevPrice: true,
            imageSrc: true,
            tags: true
        }
    });

    return <main className={`container ${styles.main}`}>
        <ItemShowList title={category.title} items={items as Array<ItemType>} tags={category.tags} elements={3}/>
    </main>
}