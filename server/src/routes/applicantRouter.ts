import { Router } from 'express'

import applicantController from '@/controllers/applicantController'

const applicantRouter = Router()

applicantRouter.post('/:id', applicantController.createApplicant)

export default applicantRouter
