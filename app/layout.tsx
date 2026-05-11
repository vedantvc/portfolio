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
      <body className="aurora-bg text-white antialiased min-h-screen" suppressHydrationWarning>

        {/* Moving orb layer — rendered behind all content */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">

          {/* Orb 1 — large indigo, top-left */}
          <div
            className="absolute rounded-full blur-[140px]"
            style={{
              width: '700px', height: '700px',
              top: '-15%', left: '-8%',
              background: 'radial-gradient(circle, rgba(79,70,229,0.30) 0%, transparent 65%)',
              animation: 'orb-drift-1 22s ease-in-out infinite',
            }}
          />

          {/* Orb 2 — large cyan, bottom-right */}
          <div
            className="absolute rounded-full blur-[130px]"
            style={{
              width: '600px', height: '600px',
              bottom: '-10%', right: '-8%',
              background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 65%)',
              animation: 'orb-drift-2 28s ease-in-out infinite',
            }}
          />

          {/* Orb 3 — medium violet, center */}
          <div
            className="absolute rounded-full blur-[120px]"
            style={{
              width: '450px', height: '450px',
              top: '35%', left: '40%',
              background: 'radial-gradient(circle, rgba(124,58,237,0.20) 0%, transparent 65%)',
              animation: 'orb-drift-3 34s ease-in-out infinite',
            }}
          />

          {/* Orb 4 — small indigo-light, top-right */}
          <div
            className="absolute rounded-full blur-[100px]"
            style={{
              width: '320px', height: '320px',
              top: '5%', right: '10%',
              background: 'radial-gradient(circle, rgba(129,140,248,0.18) 0%, transparent 65%)',
              animation: 'orb-drift-1 40s ease-in-out infinite reverse',
            }}
          />

          {/* Orb 5 — small teal, mid-left */}
          <div
            className="absolute rounded-full blur-[110px]"
            style={{
              width: '350px', height: '350px',
              top: '60%', left: '5%',
              background: 'radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 65%)',
              animation: 'orb-drift-2 32s ease-in-out infinite reverse',
            }}
          />
        </div>

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
