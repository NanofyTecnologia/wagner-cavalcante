import { NextRequest, NextResponse } from 'next/server'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { hashSync } from 'bcrypt'
import prisma from '@/config/prisma'

export async function POST(
  req: NextRequest,
  { params }: { params: { token: string } },
) {
  const token = params.token
  const data = await req.json()

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
