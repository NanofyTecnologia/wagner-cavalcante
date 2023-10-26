import jwt from 'jsonwebtoken'
import { compareSync } from 'bcrypt'
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

async function generateToken(payload: any) {
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: '30d',
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
}
