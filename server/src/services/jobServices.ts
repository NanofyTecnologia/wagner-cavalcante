import jobsRepository from '@/repositories/jobsRepository'
import { JobData } from '@/types/jobsTypes'

async function getJob(jobId: string) {
  return await jobsRepository.findById(jobId)
}

async function getJobs() {
  return await jobsRepository.findAll()
}

async function getPublishedJobs() {
  return await jobsRepository.findAllPublished()
}

async function createJob(data: JobData) {
  return await jobsRepository.create(data)
}

async function updateJob(jobId: string, data: Partial<JobData>) {
  return await jobsRepository.update(jobId, data)
}

async function deleteJob(jobId: string) {
  return await jobsRepository.destroy(jobId)
}

export default {
  getJob,
  getJobs,
  createJob,
  updateJob,
  deleteJob,
  getPublishedJobs,
}
