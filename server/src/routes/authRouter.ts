import { Router } from 'express'
import authController from '@/controllers/authController'

const authRouter = Router()

authRouter
  .post('/sign-in', authController.signInUser)
  .post('/reset-password/:token', authController.resetPassword)
  .post('/send-email/reset-password', authController.sendEmailToResetPassword)

export default authRouter
