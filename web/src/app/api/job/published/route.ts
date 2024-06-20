import { NextResponse } from 'next/server'

import prisma from '@/config/prisma'

export async function GET() {
  const publishedJobs = await prisma.job.findMany({
    where: {
      published: true,
    },
  })

  return NextResponse.json(publishedJobs, { status: 200 })
}
