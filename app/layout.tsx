import Navbar from '@/components/navbar/Navbar'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Banchee',
  description: 'Banchee, Banking website.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="container">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
