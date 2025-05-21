import { NextRequest, NextResponse } from 'next/server'

import { getServerSession } from 'next-auth'

import prisma from '@/config/prisma'
import { authOptions } from '@/lib/next-auth'

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session?.user.id) {
    return NextResponse.json('Não Autorizado', { status: 401 })
  }

  const allPosts = await prisma.post.findMany()

  return NextResponse.json(allPosts, { status: 200 })
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  const session = await getServerSession(authOptions)

  const createdPost = await prisma.post.create({
    data: {
      ...data,
      author: {
        connect: {
          id: session?.user.id,
        },
      },
    },
  })

  return NextResponse.json(createdPost, { status: 201 })
}
