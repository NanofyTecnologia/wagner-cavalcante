import { Request, Response } from 'express'
import authServices from '@/services/authServices'
import sendError from '@/utils/sendError'

async function signInUser(req: Request, res: Response) {
  try {
    const { body } = req

    const response = await authServices.signInUser(body)

    res.status(200).send(response)
  } catch (error) {
    sendError(res, error)
  }
}

export default {
  signInUser,
}
