import { useState } from 'react'

export function useModal<T>() {
  const [data, setData] = useState<T | null>(null)
  const [opened, setOpened] = useState<boolean>(false)

  const open = (data?: T) => {
    if (data) {
      setData(data)
    }

    setOpened(true)
  }

  const close = () => {
    if (data) {
      setTimeout(() => {
        setData(null)
      }, 100)
    }

    setOpened(false)
  }

  const toggle = () => {
    if (data) {
      setTimeout(() => {
        setData(null)
      }, 100)
    }

    setOpened((state) => !state)
  }

  return { opened, data, open, close, toggle }
}
