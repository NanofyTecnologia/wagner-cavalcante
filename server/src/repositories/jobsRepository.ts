import prisma from '@/config/database'
import { JobData } from '@/types/jobsTypes'

function create(data: JobData) {
  return prisma.job.create({
    data,
  })
}

function update(jobId: string, data: Partial<JobData>) {
  return prisma.job.update({
    where: {
      id: jobId,
    },
    data,
  })
}

function destroy(jobId: string) {
  return prisma.job.delete({
    where: {
      id: jobId,
    },
  })
}

function findAll() {
  return prisma.job.findMany()
}

function findById(jobId: string) {
  return prisma.job.findUnique({
    where: {
      id: jobId,
    },
  })
}

function findAllPublished() {
  return prisma.job.findMany({
    where: {
      published: true,
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
