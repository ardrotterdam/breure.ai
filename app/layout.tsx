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
  title: {
    default: 'Breure.ai | Maritieme Websites voor Offshore & Maritime',
    template: '%s',
  },
  description:
    'Premium digitale platforms voor offshore-, maritieme- en zware industriële bedrijven. Wij ontwerpen krachtige websites voor operators, scheepseigenaren en engineeringbedrijven.',
  keywords: [
    'offshore websites',
    'maritieme sector',
    'vessel websites',
    'jack-up websites',
    'asset microsites',
    'offshore marketing',
    'maritime websites',
    'engineered for trust',
    'Rotterdam',
  ],
  authors: [{ name: 'Breure Web Agency' }],
  creator: 'Breure Web Agency',
  icons: {
    icon: [
      { url: '/breure-favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/breure-favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/breure-favicon-512.png',
  },
  alternates: {
    canonical: '/',
    languages: {
      'nl-NL': '/',
      'en-US': '/en',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    alternateLocale: ['en_US'],
    url: 'https://breure.ai',
    title: 'Breure.ai | Maritieme Websites voor Offshore & Maritime',
    description:
      'Premium digitale platforms voor offshore-, maritieme- en zware industriële bedrijven.',
    siteName: 'Breure.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Breure.ai | Maritieme Websites voor Offshore & Maritime',
    description:
      'Premium digitale platforms voor offshore-, maritieme- en zware industriële bedrijven.',
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
