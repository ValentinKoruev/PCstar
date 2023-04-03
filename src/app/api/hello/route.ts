import { NextResponse } from "next/server";
import { prisma } from "../../../../server/db/client"


export async function GET(request: Request) {

  const items = await prisma.item.findMany({ where: {
    categories: {has: '/test/sub'}
  } });


  return NextResponse.json(items, {
    status: 200,
  })
}


export async function POST(request: Request) {

  let {title, price, categories} = await request.json();

  // let categoriesArray = JSON.parse(categories);
  price = parseFloat(price);
  // const item = await prisma.item.create({
  //   data: {
  //     title,
  //     price,
  //     categories
  //   }
  // })

  return NextResponse.json(categories, {
    status: 200,
  })
}
