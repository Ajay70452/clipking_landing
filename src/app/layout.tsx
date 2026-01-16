import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BigMotion - AI Short Form Video Generator',
  description: 'Create viral short-form videos with AI. Generate passive income with automated video creation.',
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
