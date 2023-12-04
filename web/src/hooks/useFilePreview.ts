import { useEffect, useState } from 'react'

export default function useFilePreview(file: any) {
  const [fileSource, setFileSource] = useState<any | null>(null)

  useEffect(() => {
    if (file && file[0]) {
      const url = URL.createObjectURL(file[0])

      if (url !== fileSource) {
        setFileSource(URL.createObjectURL(file[0]))
      }
    }
  }, [file, fileSource])

  return [fileSource, setFileSource]
}
