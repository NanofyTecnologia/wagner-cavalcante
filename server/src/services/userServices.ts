import { hashSync } from 'bcrypt'

import { UserData } from '@/types/userTypes'
import { httpResponse } from '@/utils/httpResponse'
import userRepository from '@/repositories/userRepository'
import authServices from './authServices'

async function createUser(data: UserData) {
  const { email, password } = data

  await validateEmailExistsOrFail(email)

  const hashedPassword = hashSync(password, 10)

  const newData = {
    ...data,
    password: hashedPassword,
  }

  await userRepository.create(newData)
}

async function getUserById(id: string) {
  const user = await userRepository.findById(id)

  if (!user) {
    throw httpResponse('notFound', 'Usuário não encontrado')
  }

  const { password: _, ...userWithoutPassword } = user

  return userWithoutPassword
}

async function validateEmailExistsOrFail(email: string) {
  const user = await userRepository.findByEmail(email)

  if (user) {
    throw httpResponse('conflict', 'E-mail já cadastrado')
  }

  return user
}

type ChangePasswordData = {
  currentPassword: string
  newPassword: string
}

async function changePassword(userId: string, data: ChangePasswordData) {
  const { currentPassword, newPassword } = data

  const user = await userRepository.findById(userId)

  if (!user) {
    throw httpResponse('notFound', 'Usuário não encontrado')
  }

  await authServices.validatePasswordOrFail(currentPassword, user.password)

  const hashedPassword = hashSync(newPassword, 10)

  await userRepository.update(userId, { password: hashedPassword })
}

export default {
  createUser,
  getUserById,
  changePassword,
}
