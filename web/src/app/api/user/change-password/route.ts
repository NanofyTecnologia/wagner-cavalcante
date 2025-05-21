import { NextRequest, NextResponse } from 'next/server'

import { compareSync, hashSync } from 'bcrypt'
import { getServerSession } from 'next-auth'

import prisma from '@/config/prisma'
import { authOptions } from '@/lib/next-auth'

export async function PUT(req: NextRequest) {
  const data = await req.json()
  const session = await getServerSession(authOptions)

  if (!session?.user.id) {
    return NextResponse.json('Não encontrado', { status: 404 })
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  })

  if (!user) {
    return NextResponse.json('Não encontrado', { status: 404 })
  }

  const { currentPassword, newPassword } = data

  const matchPassword = await validatePasswordOrFail(
    currentPassword,
    user?.password,
  )

  if (!matchPassword) {
    return NextResponse.json('Credenciais inválidas', { status: 401 })
  }

  const hashedPassword = hashSync(newPassword, 10)

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      password: hashedPassword,
    },
  })

  return NextResponse.json('Sucesso', { status: 200 })
}

async function validatePasswordOrFail(password: string, dbPassword: string) {
  const matchPassword = compareSync(password, dbPassword)

  return matchPassword
}
