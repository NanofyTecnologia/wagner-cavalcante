import { NextRequest, NextResponse } from 'next/server'

import prisma from '@/config/prisma'

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id
  const data = await req.json()

  await prisma.applicant.create({
    data: {
      ...data,
      job: {
        connect: {
          id,
        },
      },
    },
  })

  return NextResponse.json('Sucesso', { status: 201 })
}
