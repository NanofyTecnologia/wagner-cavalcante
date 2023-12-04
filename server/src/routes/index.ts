import { Router } from 'express'

import jobRouter from './jobRouter'
import authRouter from './authRouter'
import userRouter from './userRouter'
import postRouter from './postRouter'
import uploadRouter from './uploadRouter'

const router = Router()

router.use('/', authRouter)
router.use('/job', jobRouter)
router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/upload', uploadRouter)

export default router
