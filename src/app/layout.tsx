import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
