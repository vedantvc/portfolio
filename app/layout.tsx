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
      <body className="bg-[#0d1117] text-white antialiased" suppressHydrationWarning>
        {/* Floating gradient orb backdrop */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
          <div
            className="absolute top-[-15%] left-[-5%] w-[650px] h-[650px] rounded-full blur-[130px]"
            style={{
              background: 'radial-gradient(circle, rgba(79,70,229,0.18) 0%, rgba(79,70,229,0) 70%)',
              animation: 'orb-drift-1 22s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-[-15%] right-[-5%] w-[550px] h-[550px] rounded-full blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(6,182,212,0) 70%)',
              animation: 'orb-drift-2 28s ease-in-out infinite',
            }}
          />
          <div
            className="absolute top-[50%] right-[20%] w-[350px] h-[350px] rounded-full blur-[100px]"
            style={{
              background: 'radial-gradient(circle, rgba(0,255,136,0.07) 0%, rgba(0,255,136,0) 70%)',
              animation: 'orb-drift-1 35s ease-in-out infinite reverse',
            }}
          />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
