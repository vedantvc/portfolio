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
    description: 'Software Engineer with 4+ years in fintech and AI engineering. Currently at PayPal.',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="bg-[#0d1117] text-white antialiased" suppressHydrationWarning>

        {/* Floating orb backdrop */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
          <div
            className="absolute top-[-15%] left-[-8%] w-[700px] h-[700px] rounded-full blur-[140px]"
            style={{
              background: 'radial-gradient(circle, rgba(79,70,229,0.28) 0%, transparent 65%)',
              animation: 'orb-drift-1 22s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-[-12%] right-[-8%] w-[600px] h-[600px] rounded-full blur-[130px]"
            style={{
              background: 'radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 65%)',
              animation: 'orb-drift-2 28s ease-in-out infinite',
            }}
          />
          <div
            className="absolute top-[40%] left-[35%] w-[450px] h-[450px] rounded-full blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)',
              animation: 'orb-drift-3 34s ease-in-out infinite',
            }}
          />
        </div>

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
