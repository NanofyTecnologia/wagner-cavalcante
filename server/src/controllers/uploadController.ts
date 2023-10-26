import { Request, Response } from 'express'
import uploadServices from '@/services/uploadServices'
import sendError from '@/utils/sendError'

async function uploadFile(req: Request, res: Response) {
  try {
    const { coverURL }: any = req.files

    const fileURL = await uploadServices.uploadFile(coverURL)

    res.status(201).json(fileURL)
  } catch (error: any) {
    sendError(res, error)
  }
}

export default {
  uploadFile,
}
