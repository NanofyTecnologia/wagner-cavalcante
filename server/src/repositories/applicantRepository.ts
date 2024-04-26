import prisma from '@/config/database'
import { Applicant } from '@prisma/client'

export type ApplicantData = Omit<
  Applicant,
  'id' | 'createdAt' | 'updatedAt' | 'jobId'
>

function create(data: ApplicantData, id: string) {
  return prisma.applicant.create({
    data: {
      ...data,
      job: {
        connect: {
          id,
        },
      },
    },
  })
}

export default {
  create,
}
