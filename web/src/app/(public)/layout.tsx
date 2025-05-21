import '../globals.css'

import { Montserrat } from 'next/font/google'

import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/heroui/navbar'

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
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
