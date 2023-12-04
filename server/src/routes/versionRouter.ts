import { Router } from 'express'

const versionRouter = Router()

versionRouter.get('/', (req, res) => {
  res.status(200).send('Version: 1.4.0 - Developed by: @NanofyTecnologia')
})

export default versionRouter
