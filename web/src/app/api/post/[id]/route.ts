import { NextRequest, NextResponse } from 'next/server'

import prisma from '@/config/prisma'
import supabase from '@/config/supabase'

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()

  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  })

  return NextResponse.json(post, { status: 200 })
}

export async function PUT(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()
  const data = await req.json()

  if (!id) {
    return NextResponse.json({ error: 'ID não encontrado' }, { status: 400 })
  }

  await removeExistsPostImage(id)

  const updatedPost = await prisma.post.update({
    where: {
      id,
    },
    data,
  })

  return NextResponse.json(updatedPost, { status: 200 })
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()

  if (!id) {
    return NextResponse.json({ error: 'ID não encontrado' }, { status: 400 })
  }

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
