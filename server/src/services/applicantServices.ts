import applicantRepository, {
  ApplicantData,
} from '@/repositories/applicantRepository'

async function createApplicant(data: ApplicantData, id: string) {
  return await applicantRepository.create(data, id)
}

export default { createApplicant }
