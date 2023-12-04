import jwt, { JwtPayload } from 'jsonwebtoken'
import { compareSync, hashSync } from 'bcrypt'
import nodemailer from 'nodemailer'
import { SignInData } from '@/types/userTypes'
import { httpResponse } from '@/utils/httpResponse'
import userRepository from '@/repositories/userRepository'

async function signInUser(data: SignInData) {
  const { email, password } = data

  const user = await validateEmailExistsOrFail(email)

  const { id, password: dbPassword, name } = user

  await validatePasswordOrFail(password, dbPassword)

  const isFirstLogin = await checkIsFirstLogin(user.createdAt, user.updatedAt)

  const token = await generateToken({ id })

  return { name, email, isFirstLogin, token }
}

async function sendEmailToResetPassword(email: string) {
  const user = await validateEmailExistsOrFail(email)

  const token = await generateToken({ id: user.id, isLogged: false }, '5m')

  const body = `Olá, ${user.name}! Para redefinir sua senha, clique no link abaixo: <br> <a href="https://monteecavalcante.adv.br/login/recuperar-senha/${token}">Redefinir senha</a>`

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS,
    },
  })

  const info = await transporter.sendMail({
    from: process.env.AUTH_USER,
    to: email,
    subject: 'Redefinição de senha',
    html: body,
  })
}

async function resetPassword(token: string, password: string) {
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET as string,
  ) as JwtPayload

  const hashedPassword = hashSync(password, 10)

  await userRepository.update(decoded.id, { password: hashedPassword })
}

async function generateToken(payload: any, expiresIn?: string) {
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: expiresIn || '30d',
  })

  return token
}

async function checkIsFirstLogin(createdAt: Date, updatedAt: Date) {
  if (createdAt.toISOString() === updatedAt.toISOString()) {
    return true
  }

  return false
}

async function validatePasswordOrFail(password: string, dbPassword: string) {
  const matchPassword = compareSync(password, dbPassword)

  if (!matchPassword) {
    throw httpResponse('unauthorized', 'Credenciais inválidas')
  }
}

async function validateEmailExistsOrFail(email: string) {
  const user = await userRepository.findByEmail(email)

  if (!user) {
    throw httpResponse('unauthorized', 'Credenciais inválidas')
  }

  return user
}

export default {
  signInUser,
  resetPassword,
  sendEmailToResetPassword,
}
