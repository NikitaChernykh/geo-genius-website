import { Kanit } from 'next/font/google'

export const metadata = {
  title: 'Geo Genius - Learn Geography',
  description: 'Best way to learn geography!',
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
      </body>
    </html>
  )
}
