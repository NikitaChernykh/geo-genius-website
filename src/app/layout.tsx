import { GoogleTagManager } from '@next/third-parties/google'
import { Kanit } from 'next/font/google'

export const metadata = {
  title: 'Geo Genius - The best way to learn geography!',
  description: `Learn geography by playing a game. It's 100% free, fun, and easy.`,
  twitter: {
    card: 'summery-large-image',
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
