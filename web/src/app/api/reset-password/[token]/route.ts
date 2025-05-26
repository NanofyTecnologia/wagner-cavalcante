import { NextRequest, NextResponse } from 'next/server'

import { hashSync } from 'bcrypt'
import jwt, { JwtPayload } from 'jsonwebtoken'

import prisma from '@/config/prisma'

export async function POST(req: NextRequest) {
  const token = req.nextUrl.pathname.split('/').pop()
  const data = await req.json()

  if (!token) {
    return NextResponse.json({ error: 'TOKEN não encontrado' }, { status: 400 })
  }

  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET as string,
  ) as JwtPayload

  const hashedPassword = hashSync(data.password, 10)

  await prisma.user.update({
    where: {
      id: decoded.id,
    },
    data: {
      password: hashedPassword,
    },
  })

  return NextResponse.json('Sucesso', { status: 200 })
}
