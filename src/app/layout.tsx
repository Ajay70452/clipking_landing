import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reelr - AI Short Form Video Generator',
  description: 'The ultimate video distribution and optimization platform. Grow your business using automated video.',
  icons: {
    icon: '/logo/reelr-fav.svg',
    shortcut: '/logo/reelr-fav.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-dark-bg text-text-primary">{children}</body>
    </html>
  )
}
