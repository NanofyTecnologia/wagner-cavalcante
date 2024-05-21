import GoogleTagManager from '@/components/GoogleTagManager'
import '../globals.css'

import {
  Italiana,
  EB_Garamond as EbGaramond,
  Montserrat,
} from 'next/font/google'

export const metadata = {
  title: 'Monte & Cavalcante | Direito de saude',
  description: 'Monte e cavalcante direito de saude',
}

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-montserrat',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <GoogleTagManager />
      </head>
      <body
        className={`${italiana.variable} ${garamond.variable} ${montserrat.className} bg-secondary`}
      >
        {children}

        <noscript
          dangerouslySetInnerHTML={{
            __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TTFWZ8R5"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `,
          }}
        />
      </body>
    </html>
  )
}
