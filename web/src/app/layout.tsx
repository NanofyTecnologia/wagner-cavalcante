import { Montserrat } from 'next/font/google'

import type { Metadata } from 'next'

import './globals.css'

const montserrat = Montserrat({
  variable: '--font-geist-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Wagner Cavalcante Advogados',
  description: 'by Nanofy Tecnologia Ltda',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  )
}
