import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://breure.ai'),
  title: 'Breure Web Agency | Offshore & Maritieme Websites',
  description: 'Gespecialiseerd in websites voor de offshore & maritieme sector. Wij bouwen de asset websites waarop miljoenenbeslissingen worden genomen. Heavy-lift vessels, jack-ups, platforms en support ships.',
  keywords: ['offshore websites', 'maritieme sector', 'vessel websites', 'jack-up websites', 'asset microsites', 'offshore marketing', 'Rotterdam'],
  authors: [{ name: 'Breure Web Agency' }],
  creator: 'Breure Web Agency',
  icons: {
    icon: [
      { url: '/breure-favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/breure-favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/breure-favicon-512.png',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://breure.ai',
    title: 'Breure Web Agency | Offshore & Maritieme Websites',
    description: 'Wij bouwen de asset websites waarop miljoenenbeslissingen worden genomen.',
    siteName: 'Breure Web Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Breure Web Agency | Offshore & Maritieme Websites',
    description: 'Wij bouwen de asset websites waarop miljoenenbeslissingen worden genomen.',
  },
}

export const viewport: Viewport = {
  themeColor: '#080f1e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
