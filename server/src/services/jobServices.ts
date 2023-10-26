import jobsRepository from '@/repositories/jobsRepository'

async function getJobs() {
  return await jobsRepository.findAll()
}

export default {
  getJobs,
}
