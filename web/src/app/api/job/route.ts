import { NextRequest, NextResponse } from 'next/server'

import { getServerSession } from 'next-auth'

import prisma from '@/config/prisma'
import { authOptions } from '@/lib/next-auth'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const session = await getServerSession(authOptions)

  if (!session?.user.id) {
    return NextResponse.json('Não autorizado', { status: 401 })
  }

  const createdJob = await prisma.job.create({
    data,
  })

  return NextResponse.json(createdJob, { status: 201 })
}

export async function GET() {
  const jobs = await prisma.job.findMany({
    include: {
      Applicant: true,
    },
  })

  return NextResponse.json(jobs, { status: 200 })
}
