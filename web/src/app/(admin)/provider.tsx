'use client'
import 'react-toastify/dist/ReactToastify.css'

import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import { SessionProvider } from '@/context/SessionContext'

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ToastContainer position="bottom-center" />
      {children}
    </SessionProvider>
  )
}
