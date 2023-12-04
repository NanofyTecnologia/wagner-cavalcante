import app from './app'
import fs from 'fs'
import https from 'https'
import * as path from 'path'

const port = process.env.PORT || 4000

const privateKeyPath = path.join('/server/certificados/devfy.key')
const certificatePath = path.join('/server/certificados/devfy.crt')

const serverOptions = {
  key: fs.readFileSync(privateKeyPath),
  cert: fs.readFileSync(certificatePath),
}

const server = https.createServer(serverOptions, app);

app.listen(port, () => {
   console.log(`🚀 Server running on port ${port}`)
})
