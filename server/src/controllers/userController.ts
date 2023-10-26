import { Request, Response } from 'express'
import userServices from '@/services/userServices'
import sendError from '@/utils/sendError'

async function createUser(req: Request, res: Response) {
  try {
    const { body } = req

    await userServices.createUser(body)

    res.status(200).send('Usuário criado com sucesso')
  } catch (error: any) {
    sendError(res, error)
  }
}

async function getUserById(req: Request, res: Response) {
  try {
    const { userId } = res.locals

    const user = await userServices.getUserById(userId)

    res.status(200).send(user)
  } catch (error) {
    sendError(res, error)
  }
}

export default {
  createUser,
  getUserById,
}
