import userController from '@/controllers/userController'
import validateTokenMiddleware from '@/middleware/validateTokenMiddleware'
import { Router } from 'express'

const userRouter = Router()

userRouter
  .all('*', validateTokenMiddleware)
  .post('/', userController.createUser)
  .get('/', userController.getUserById)
  .put('/change-password', userController.changePassword)

export default userRouter
