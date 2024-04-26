import { Router } from 'express'

import uploadController from '@/controllers/uploadController'
import validateTokenMiddleware from '@/middleware/validateTokenMiddleware'

const uploadRouter = Router()

uploadRouter.post('/',  uploadController.uploadFile)

export default uploadRouter
