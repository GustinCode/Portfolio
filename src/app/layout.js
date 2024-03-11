import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ["400"] })

export const metadata = {
  title: 'GustinGame Portfolio',
  description: 'constructiong a Portifolio for publish my development work',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
