import { notFound } from 'next/navigation';
import Link from 'next/link';

import { prisma } from "@server/db/client"

import { IItem } from "@components/UI/Item";

import styles from './page.module.scss'
import Item from "@components/UI/Item";


const findItems = async (query : string, category : string) => {
    if(query) {
        const items = await prisma.item.findMany({
            where: {
                categories: {
                    has: category
                },
                tags: {
                    has: query
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

    let parentCategory = null;
    if(params.path.length > 1) {
        parentCategory = await prisma.category.findFirst({
            where: {
                name: params.path[0]
            }
        })
    }
    const items = await findItems(searchParams.query, category.category);
    const itemsFormated : Array<IItem> = items.map((item, idx) => {
        let newItem : IItem = {
            title: item.title,
            image: { src:item.imageSrc, alt:item.title},
            price: item.price,
            prevPrice: Number(item.prevPrice),
            link: `/products/${item.id}`,
            elements: 3
        }
        return newItem;
    })


    return <main className={`container ${styles.main}`}>
        <span>{`Начало > ${parentCategory ? `${parentCategory.title} > ${category.title}` : category.title}`}</span>
        <span>{searchParams.query}</span>
        <div className={styles.mainContainer}>
            <aside className={styles.sideMenu}>
                <Link href={`/catalog${category.category}?query=HP`}>test</Link>
            </aside>
            <section className={styles.itemsSection}>
                <h1 className={styles.categoryTitle}>{category.title}</h1>
                <ul className={styles.itemList}>
                    {itemsFormated.map((item, idx) => {
                        return <Item title={item.title} image={item.image} price={item.price} prevPrice={item.prevPrice} link={item.link} idx={idx} elements={item.elements}/>
                    })}
                </ul>
            </section>
        </div>
    </main>
}