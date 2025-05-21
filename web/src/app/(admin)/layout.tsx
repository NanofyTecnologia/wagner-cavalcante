import '../globals.css'

import {
  Italiana,
  Open_Sans as OpenSans,
  EB_Garamond as EbGaramond,
} from 'next/font/google'

import type { Metadata } from 'next'

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
  title: 'Wagner Cavalcante Advogados',
  description: 'Wagner Cavalcante Advogados',
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
