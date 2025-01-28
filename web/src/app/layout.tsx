import { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'

const poppins = Poppins({
  variable: '--font-geist-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ops! Página em construção...',
  description: 'Desenvolvido por Nanofy Tecnologia Ltda.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  )
}
