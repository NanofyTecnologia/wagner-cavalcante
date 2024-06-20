import { NextRequest, NextResponse } from 'next/server'

import prisma from '@/config/prisma'
import supabase from '@/config/supabase'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id

  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  })

  return NextResponse.json(post, { status: 200 })
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id
  const data = await req.json()

  await removeExistsPostImage(id)

  const updatedPost = await prisma.post.update({
    where: {
      id,
    },
    data,
  })

  return NextResponse.json(updatedPost, { status: 200 })
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id

  await removeExistsPostImage(id)

  await prisma.post.delete({
    where: {
      id,
    },
  })

  return NextResponse.json('', { status: 200 })
}

async function removeExistsPostImage(id: string) {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  })

  if (!post?.coverURL) {
    return
  }

  await supabase.storage.from('monte_cavalcante_bucket').remove([post.coverURL])
}
