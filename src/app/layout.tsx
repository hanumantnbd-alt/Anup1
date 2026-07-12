import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Anup | Premium Portfolio',
  description: 'Showcasing exceptional design and development work',
  metadataBase: new URL('https://anup-portfolio.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anup-portfolio.com',
    siteName: 'Anup Portfolio',
    title: 'Anup | Premium Portfolio',
    description: 'Showcasing exceptional design and development work',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anup | Premium Portfolio',
    description: 'Showcasing exceptional design and development work',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-slate-950 text-white">
        {children}
      </body>
    </html>
  )
}
