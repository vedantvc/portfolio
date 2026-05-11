'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Prevent hydration mismatch — render placeholder until mounted
  if (!mounted) return <div className="w-8 h-8" />

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-14 h-7 rounded-full border border-[#d4d8f0] dark:border-[#1e2235] bg-[#e8ecf8] dark:bg-[#1e2235] transition-colors duration-300 flex items-center px-1"
    >
      {/* Track icons */}
      <span className="absolute left-1.5 text-[11px]">☀️</span>
      <span className="absolute right-1.5 text-[11px]">🌙</span>
      {/* Thumb */}
      <span
        className={`relative z-10 w-5 h-5 rounded-full bg-[#6366f1] shadow transition-transform duration-300 ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      />
    </button>
  )
}
