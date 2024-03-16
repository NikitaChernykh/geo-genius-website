import { GoogleTagManager } from '@next/third-parties/google'
import { Kanit } from 'next/font/google'

export const metadata = {
  title: 'Geo Genius - The best way to learn geography!',
  description: `Learn geography by playing a game. It's 100% free, fun, and easy.`,
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'Learn geography for free',
    description: `Learn geography by playing a game. It's free, fun, and easy.`,
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: 'Geo Genius',
    images: [
      {
        images: '/assets/og-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: '/assets/og-image.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Geo Genius iOS app',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export const fontKanit = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit',
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${fontKanit.className}`}
      >
        {children}
        <GoogleTagManager gtmId="GTM-5HM85R4D" />
      </body>
    </html>
  )
}
