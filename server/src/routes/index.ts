import { Router } from 'express'

import jobRouter from './jobRouter'
import authRouter from './authRouter'
import jobRouter from './jobRouter'
import userRouter from './userRouter'
import postRouter from './postRouter'
import uploadRouter from './uploadRouter'
import contactRouter from './contactRouter'

const router = Router()

router.use('/', authRouter)
router.use('/job', jobRouter)
router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/upload', uploadRouter)
router.use('/contact', contactRouter)

export default router
