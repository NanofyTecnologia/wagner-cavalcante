import { NextRequest, NextResponse } from 'next/server'

import prisma from '@/config/prisma'

export async function POST(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()
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
