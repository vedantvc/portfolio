// app/layout.tsx
import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vedant Chidgopkar — Software Engineer',
  description:
    'Software Engineer with 4+ years building scalable systems across fintech and enterprise platforms — distributed payment microservices to production AI agents.',
  openGraph: {
    title: 'Vedant Chidgopkar — Software Engineer',
    description:
      'Software Engineer with 4+ years in fintech and AI engineering. Currently at PayPal.',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="bg-[#0a0a0f] text-white antialiased">{children}</body>
    </html>
  )
}
