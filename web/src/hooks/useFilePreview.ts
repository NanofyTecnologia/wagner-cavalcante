import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export default function useFilePreview(
  file: any,
): [string, Dispatch<SetStateAction<string>>] {
  const [fileSource, setFileSource] = useState<string>('')

  useEffect(() => {
    if (file && file[0]) {
      const url = URL.createObjectURL(file[0])

      if (url !== fileSource) {
        setFileSource(URL.createObjectURL(file[0]))
      }
    }
  }, [file])

  return [fileSource, setFileSource]
}
