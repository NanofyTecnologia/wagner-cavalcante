import { Router } from 'express'
import authController from '@/controllers/authController'

const authRouter = Router()

authRouter.post('/sign-in', authController.signInUser)

export default authRouter
