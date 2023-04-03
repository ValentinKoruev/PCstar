import { NextResponse } from "next/server";
import { prisma } from "@server/db/client";


export async function GET(request: Request) {

  // const items = await prisma.item.findMany({ where: {
  //   categories: { hasSome: ['/test/sub', '/test/sub1']}
  // } });

  const categories = await prisma.category.findMany({
    where: {
      parent: {
        contains: '/computers'
      }
    }
  })

  //{parent: /^\/electronics$/}

  return NextResponse.json(categories, {
    status: 200,
  })
}


export async function POST(request: Request) {

  let {title, description, price, prevPrice, categories, imageSrc, tags} = await request.json();

  price = parseFloat(price);
  prevPrice = parseFloat(prevPrice);
  const item = await prisma.item.create({
    data: {
      title,
      description,
      price,
      prevPrice,
      categories,
      imageSrc,
      tags
    }
  })

  return NextResponse.json(item, {
    status: 200,
  })
}
