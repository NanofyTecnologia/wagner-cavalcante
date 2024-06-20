import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'

import prisma from '@/config/prisma'

export async function POST(req: NextRequest) {
  const data = await req.json()

  const { email } = data

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    return NextResponse.json('Não encontrado', { status: 404 })
  }

  const token = await generateToken({ id: user.id, isLogged: false }, '5m')

  const body = `Olá, ${user.name}! Para redefinir sua senha, clique no link abaixo: <br> <a href="https://monteecavalcante.adv.br/login/recuperar-senha/${token}">Redefinir senha</a>`

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.AUTH_USER,
    to: email,
    subject: 'Redefinição de senha',
    html: body,
  })

  return NextResponse.json('Sucesso', { status: 200 })
}

async function generateToken(payload: any, expiresIn?: string) {
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: expiresIn || '30d',
  })

  return token
}
