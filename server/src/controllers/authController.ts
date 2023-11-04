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

async function resetPassword(req: Request, res: Response) {
  try {
    const { body, params } = req

    await authServices.resetPassword(params.token, body.password)

    res.sendStatus(200)
  } catch (error) {
    sendError(res, error)
  }
}

async function sendEmailToResetPassword(req: Request, res: Response) {
  try {
    const { body } = req

    await authServices.sendEmailToResetPassword(body.email)

    res.sendStatus(200)
  } catch (error) {
    sendError(res, error)
  }
}

export default {
  signInUser,
  resetPassword,
  sendEmailToResetPassword,
}
