import { extname } from 'node:path'
import { randomUUID } from 'node:crypto'

async function uploadFile(upload) {
  if (!upload) {
    throw new Error('File not found')
  }

  const mimeTypeRegex = /^(image|application)\/(jpe?g|png|gif|bmp|pdf)$/
  const isValidImageFormat = mimeTypeRegex.test(upload.mimetype)

  if (!isValidImageFormat) {
    throw new Error('Invalid image format')
  }

  const fileId = randomUUID()
  const extension = extname(upload.name)
  const fileName = fileId.concat(extension)

  upload.mv(`./src/uploads/${fileName}`)

  const fileURL = `${process.env.API_URL}/uploads/${fileName}`

  return fileURL
}

export default {
  uploadFile,
}
