import { NextResponse } from 'next/server'

import prisma from '@/config/prisma'

export async function GET() {
  const publishedPosts = await prisma.post.findMany({
    where: {
      published: true,
    },
  })

  return NextResponse.json(publishedPosts, { status: 200 })
}
