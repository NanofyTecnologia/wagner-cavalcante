import { Job } from '@prisma/client'

type JobData = Omit<Job, 'id' | 'createdAt' | 'updatedAt'>

export { JobData }
