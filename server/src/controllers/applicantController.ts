import { Request, Response } from 'express'

import applicantServices from '@/services/applicantServices'
import sendError from '@/utils/sendError'

async function createApplicant(req: Request, res: Response) {
  try {
    const { body } = req
    const { id } = req.params

    await applicantServices.createApplicant(body, id)

    res.sendStatus(201)
  } catch (error) {
    console.log('EErrro')
    sendError(res, error)
  }
}

export default {
  createApplicant,
}
