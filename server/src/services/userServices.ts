import { hashSync } from 'bcrypt'

import { UserData } from '@/types/userTypes'
import { httpResponse } from '@/utils/httpResponse'
import userRepository from '@/repositories/userRepository'

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

  return user
}

async function validateEmailExistsOrFail(email: string) {
  const user = await userRepository.findByEmail(email)

  if (user) {
    throw httpResponse('conflict', 'E-mail já cadastrado')
  }

  return user
}

export default {
  createUser,
  getUserById,
}
