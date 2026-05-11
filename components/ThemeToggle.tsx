'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return <div className="w-14 h-7" />

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-14 h-7 rounded-full flex items-center px-1 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--c-bar-bg)',
        border: '1px solid var(--c-border)',
      }}
    >
      <span className="absolute left-1.5 text-[11px] select-none">☀️</span>
      <span className="absolute right-1.5 text-[11px] select-none">🌙</span>
      <span
        className="relative z-10 w-5 h-5 rounded-full shadow transition-transform duration-300"
        style={{
          backgroundColor: 'var(--c-accent)',
          transform: isDark ? 'translateX(28px)' : 'translateX(0)',
        }}
      />
    </button>
  )
}
