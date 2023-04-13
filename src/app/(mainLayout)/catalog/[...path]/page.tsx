import { notFound } from 'next/navigation';
import Link from 'next/link';

import { prisma } from "@server/db/client"

import { IItem } from "@components/UI/Item";

import styles from './page.module.scss'
import Item from "@components/UI/Item";
import ItemSideMenu from '@components/UI/ItemSideMenu';
import ItemShowList from '@components/UI/ItemShowList';
import { Suspense } from 'react';
import { ItemType } from '@components/UI/ItemShowList/ItemShowListComponent/ItemShowList';

export default async function Page({
    params,
    searchParams
} : {
    params: { path: string[]},
    searchParams: { query: string }
}) {

   
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