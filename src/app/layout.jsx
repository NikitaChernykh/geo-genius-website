/* eslint-disable react/react-in-jsx-scope */
export const metadata = {
  title: 'Geo Genius - Learn Geography',
  description: 'Best way to learn geography!',
}

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
