import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'
import { compareSync } from 'bcrypt'
import { User } from '@prisma/client'

import prisma from '@/config/prisma'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { email, password } = data

    const user = await validateEmailExistsOrFail(email)

    const {
      id,
      password: dbPassword,
      name,
      createdAt,
      updatedAt,
    } = user as User

    await validatePasswordOrFail(password, dbPassword)

    const isFirstLogin = await validateIsFirstLogin(createdAt, updatedAt)

    const token = await generateToken(id)

    return NextResponse.json(
      { name, email, isFirstLogin },
      {
        status: 200,
        headers: {
          'Set-Cookie': `token=${token}; Max-Age=2592000; Path=/; HttpOnly; SameSite=Lax; Secure`,
        },
      },
    )
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 400 })
  }
}

async function generateToken(id: string) {
  const token = jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: '30d',
  })

  return token
}

async function validateIsFirstLogin(createdAt: Date, updatedAt: Date) {
  if (createdAt.toISOString() === updatedAt.toISOString()) {
    return true
  }

  return false
}

async function validatePasswordOrFail(password: string, dbPassword: string) {
  const matchPassword = compareSync(password, dbPassword)

  if (!matchPassword) {
    throw new Error('Credenciais inválidas!')
  }
}

async function validateEmailExistsOrFail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    throw new Error('Credenciais inválidas!')
  }

  return user
}
