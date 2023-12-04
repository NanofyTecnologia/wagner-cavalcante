import prisma from '@/config/database'
import { UserData } from '@/types/userTypes'

function create(data: UserData) {
  return prisma.user.create({ data })
}

function update(userId: string, data: Partial<UserData>) {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data,
  })
}

function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  })
}

function findById(id: string) {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
      email: true,
      password: true,
    },
  })
}

export default {
  create,
  update,
  findById,
  findByEmail,
}
