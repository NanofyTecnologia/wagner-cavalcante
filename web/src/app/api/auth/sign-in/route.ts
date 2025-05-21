import { NextRequest, NextResponse } from 'next/server'

import { compareSync } from 'bcrypt'

import prisma from '@/config/prisma'

type UserData = {
  email: string
  password: string
}

export async function POST(req: NextRequest) {
  try {
    const body: UserData = await req.json()
    const { email, password } = body

    const user = await validateUserExistsOrFail(email)

    await validatePasswordOrFail(password, user.password)

    const { id, name } = user

    return NextResponse.json({ id, name, email }, { status: 200 })
  } catch (error) {
    return NextResponse.json('Credenciais inválidas', { status: 500 })
  }
}

async function validatePasswordOrFail(
  password: string,
  hashedPassword: string,
) {
  const passwordMatch = compareSync(password, hashedPassword)

  if (!passwordMatch) {
    throw new Error('Password does not match')
  }
}

async function validateUserExistsOrFail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    throw new Error('User not found')
  }

  return user
}
