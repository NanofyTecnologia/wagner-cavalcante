import { ReactNode } from 'react'

type ContainerProps = {
  fullWidth?: boolean
  children?: ReactNode
}

export default function Container({ children, fullWidth }: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-5xl px-4 lg:px-0 2xl:max-w-5xl ${
        fullWidth && 'w-full'
      }`}
    >
      {children}
    </div>
  )
}
