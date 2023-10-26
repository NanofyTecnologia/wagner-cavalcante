import 'dotenv/config'

import express, { json } from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import router from './routes'

const app = express()

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
)

app.use(fileUpload({ createParentPath: true }))
app.use(json())
app.use('/uploads', express.static(__dirname.concat('/uploads')))

app.use(router)

export default app
