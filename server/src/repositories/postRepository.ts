import prisma from '@/config/database'
import { PostData } from '@/types/postTypes'

function create(data: PostData) {
  return prisma.post.create({ data })
}

function update(postId: string, data: Partial<PostData>) {
  return prisma.post.update({
    where: {
      id: postId,
    },
    data,
  })
}

function destroy(postId: string) {
  return prisma.post.delete({
    where: {
      id: postId,
    },
  })
}

function findAllPublished() {
  return prisma.post.findMany({
    where: {
      published: true,
    },
  })
}

function findAll() {
  return prisma.post.findMany()
}

function findById(postId: string) {
  return prisma.post.findUnique({
    where: {
      id: postId,
    },
  })
}

export default {
  create,
  update,
  destroy,
  findAll,
  findById,
  findAllPublished,
}
