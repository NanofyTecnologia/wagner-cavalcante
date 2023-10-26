import { ReactNode } from 'react'

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="h-full rounded-md border border-gray-200 bg-white p-4">
      {children}
    </div>
  )
}
