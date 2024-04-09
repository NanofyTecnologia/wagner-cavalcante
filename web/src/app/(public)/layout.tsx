import '../globals.css'

import type { Metadata } from 'next'
import {
  Italiana,
  Bellefair,
  Montserrat,
  Open_Sans as OpenSans,
  EB_Garamond as EbGaramond,
} from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NotPayScreen from '@/components/not-pay-screen'

const openSans = OpenSans({
  weight: '400',
  subsets: ['latin'],
})

const bellefair = Bellefair({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bellefair',
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

const monteserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-montserrat',
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
        className={`${garamond.variable} ${italiana.variable} ${bellefair.variable} ${monteserrat.className}`}
      >
        {/* <Navbar />
        {children}
        <Footer /> */}

        <NotPayScreen />
      </body>
    </html>
  )
}
