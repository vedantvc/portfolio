'use client'
import { useState } from 'react'
import ThemeToggle from '@/components/ThemeToggle'

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Contact',    href: '#contact'    },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-[#0d1117]/85 backdrop-blur-md border-b border-[#d4d8f0] dark:border-[#1e2235] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#hero" className="font-mono text-[#6366f1] text-sm font-bold tracking-wider">
          VC
        </a>
        <ul className="hidden md:flex gap-8 items-center">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="font-mono text-sm text-[#5a6280] dark:text-[#8892a4] hover:text-[#6366f1] dark:hover:text-[#818cf8] transition-colors">
                {label}
              </a>
            </li>
          ))}
          <li><ThemeToggle /></li>
        </ul>
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-[#5a6280] dark:text-[#8892a4] text-lg leading-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white/95 dark:bg-[#131720]/95 backdrop-blur-md border-t border-[#d4d8f0] dark:border-[#1e2235] px-6 py-4">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="block font-mono text-sm text-[#5a6280] dark:text-[#8892a4] hover:text-[#6366f1] dark:hover:text-[#818cf8] py-2 transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
