import { extname } from 'path'
import { nanoid } from 'nanoid'

import supabase from '@/config/supabase'

export default async function uploadFile(file: FileList | undefined) {
  if (!file) return ''

  const mimeTypeRegex =
    /^(image\/(jpeg|png|jpg)|application\/pdf|application\/msword|application\/vnd.openxmlformats-officedocument.wordprocessingml.document)$/
  const isValidFormat = mimeTypeRegex.test(file[0].type)

  if (!isValidFormat) {
    return ''
  }

  const fileName = nanoid()
  const extensionName = extname(file[0].name)

  const { data, error } = await supabase.storage
    .from('monte_cavalcante_bucket')
    .upload(fileName.concat(extensionName), file[0])

  if (error) {
    return ''
  }

  return data?.path
}
