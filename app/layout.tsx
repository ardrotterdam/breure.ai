import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import { ThemeScript } from '@/components/theme-script'
import { brandAssets, openGraphImages, twitterImages } from '@/lib/site-metadata'
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
      { url: brandAssets.favicon32, sizes: '32x32', type: 'image/png' },
      { url: brandAssets.favicon512, sizes: '512x512', type: 'image/png' },
    ],
    apple: brandAssets.favicon512,
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
    images: openGraphImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Breure.ai | Maritieme Websites voor Offshore & Maritime',
    description:
      'Premium digitale platforms voor offshore-, maritieme- en zware industriële bedrijven.',
    images: twitterImages,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f6f9' },
    { media: '(prefers-color-scheme: dark)', color: '#080f1e' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${inter.variable} bg-background`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
