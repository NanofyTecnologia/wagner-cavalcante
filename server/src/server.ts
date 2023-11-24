import app from './app'
import https from 'https'
import http from 'http'

const port = process.env.PORT || 4000

const server = http.createServer(app)

server.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`)
})
