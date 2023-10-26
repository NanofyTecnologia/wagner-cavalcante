import { api } from '@/lib/axios'

export default async function uploadFile(
  file: FileList | undefined,
): Promise<string> {
  const formData = new FormData()

  if (!file) {
    return ''
  }

  let coverURL = ''

  if (file.length > 0) {
    formData.append('coverURL', file[0])

    const response = await api.post('/upload', formData)

    coverURL = response.data
  }

  return coverURL
}
