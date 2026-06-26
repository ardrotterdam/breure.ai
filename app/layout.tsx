import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@/components/google-analytics'
import { SiteJsonLd } from '@/components/site-json-ld'
import { Providers } from '@/components/providers'
import { ThemeScript } from '@/components/theme-script'
import { getRequestLocale } from '@/lib/request-locale'
import { siteUrl } from '@/lib/site-metadata'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Breure.ai | Maritieme Websites voor Offshore & Scheepvaart',
    template: '%s',
  },
  description:
    'Maritiem webdesign en professionele websites voor offshore-operators, scheepseigenaren en maritieme bedrijven. Premium platforms gebouwd voor geloofwaardigheid vóór het eerste gesprek.',
  keywords: [
    'maritieme website',
    'maritiem webdesign',
    'website voor offshore bedrijf',
    'offshore webdesign',
    'vlootpresentatie',
    'asset microsites',
    'scheepvaart website',
    'professionele website maritieme bedrijven',
    'Rotterdam',
  ],
  authors: [{ name: 'Breure.ai' }],
  creator: 'Breure.ai',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F0F4F8' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1628' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getRequestLocale()

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <SiteJsonLd />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
