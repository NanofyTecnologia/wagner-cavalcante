import '../globals.css'

import type { Metadata } from 'next'
import {
  Italiana,
  Open_Sans as OpenSans,
  EB_Garamond as EbGaramond,
} from 'next/font/google'
import Provider from './provider'

const openSans = OpenSans({
  weight: '400',
  subsets: ['latin'],
})

const italiana = Italiana({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-italiana',
})

const garamond = EbGaramond({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-garamond',
})

export const metadata: Metadata = {
  title: 'Monte e Cavalcante Advogados',
  description: 'Site da Empresa Monte e Cavalcante Advogados',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${garamond.variable} ${italiana.variable} ${openSans.className} bg-gray-50`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
