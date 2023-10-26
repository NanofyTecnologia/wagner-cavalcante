'use client'

import {
  useState,
  useEffect,
  useContext,
  ReactNode,
  createContext,
} from 'react'

type Session = {
  name: string
  email: string
}

type SessionContextType = {
  session: Session
  setSession: (session: Session) => void
}

const SessionContext = createContext<SessionContextType | null>(null)

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session>({
    name: '',
    email: '',
  })

  const providerValues = {
    session,
    setSession,
  }

  useEffect(() => {
    const initialState = JSON.parse(localStorage.getItem('session') as any) || {
      name: '',
      email: '',
    }

    setSession(initialState)
  }, [])

  return (
    <SessionContext.Provider value={providerValues}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  const context = useContext(SessionContext)

  if (!context) {
    throw new Error('useSession must be used within a SessionProvider')
  }

  return context
}
