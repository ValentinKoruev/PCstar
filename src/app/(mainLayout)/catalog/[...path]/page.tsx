import { notFound } from 'next/navigation';
import Link from 'next/link';

import { prisma } from "@server/db/client"

import { IItem } from "@components/UI/Item";

import styles from './page.module.scss'
import Item from "@components/UI/Item";
import ItemSideMenu from '@components/UI/ItemSideMenu';
import ItemShowList from '@components/UI/ItemShowList';
import { Suspense } from 'react';


const findItems = async (query : string, category : string) => {
    if(query) {
        const items = await prisma.item.findMany({
            where: {
                categories: {
                    has: category
                },
                tags: {
                    hasSome: query.split(',')
                }
            }
        });
        return items;
    } else {
        const items = await prisma.item.findMany({
            where: {
                categories: {
                    has: category
                }, 
            }
        });
        return items;
    }

}


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

    // let parentCategory = null;
    // if(params.path.length > 1) {
    //     parentCategory = await prisma.category.findFirst({
    //         where: {
    //             name: params.path[0]
    //         }
    //     })
    // }

    return <main className={`container ${styles.main}`}>
        {/* <span>{`Начало > ${parentCategory ? `${parentCategory.title} > ${category.title}` : category.title}`}</span> */}
        <div className={styles.mainContainer}>
            <ItemSideMenu category={category} searchParams={searchParams.query}/>
            <Suspense fallback={<p>loading</p>}>
                <ItemShowList category={category} elements={3}/>
            </Suspense>
        </div>
    </main>
}