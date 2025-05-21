import { NextRequest, NextResponse } from 'next/server'

import { getServerSession } from 'next-auth'

import prisma from '@/config/prisma'
import { authOptions } from '@/lib/next-auth'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id
  const session = await getServerSession(authOptions)

  if (!session?.user.id) {
    return NextResponse.json('Não autorizado', { status: 401 })
  }

  const job = await prisma.job.findUnique({
    where: {
      id,
    },
  })

  return NextResponse.json(job, { status: 200 })
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id
  const data = await req.json()
  const session = await getServerSession(authOptions)

  if (!session?.user.id) {
    return NextResponse.json('Não autorizado', { status: 401 })
  }

  const updatedJob = await prisma.job.update({
    where: {
      id,
    },
    data,
  })

  return NextResponse.json(updatedJob, { status: 200 })
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id
  const session = await getServerSession(authOptions)

  if (!session?.user.id) {
    return NextResponse.json('Não autorizado', { status: 401 })
  }

  await prisma.job.delete({
    where: {
      id,
    },
  })

  return NextResponse.json('', { status: 200 })
}
