import type { Metadata } from 'next'
import './global.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

export const metadata: Metadata = {
  title: 'Tong Zhou | Site',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}
