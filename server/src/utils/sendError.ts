import { Response } from 'express'

async function sendError(res: Response, error: any) {
  if (error.message) {
    return res.status(error.statusCode).send(error.message)
  }

  res.sendStatus(500)
}

export default sendError
