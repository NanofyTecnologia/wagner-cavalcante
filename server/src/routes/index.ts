import { Router } from 'express'

import authRouter from './authRouter'
import jobRouter from './jobRouter'
import userRouter from './userRouter'
import postRouter from './postRouter'
import uploadRouter from './uploadRouter'
import contactRouter from './contactRouter'
import versionRouter from './versionRouter'

const router = Router()

router.use('/', authRouter)
router.use('/job', jobRouter)
router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/upload', uploadRouter)
router.use('/version', versionRouter)
router.use('/contact', contactRouter)
router.use('/applicant', applicantRouter)

export default router
