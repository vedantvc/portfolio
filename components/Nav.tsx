'use client'
import { useEffect, useState } from 'react'
import ThemeToggle from '@/components/ThemeToggle'

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Academics',  href: '#academics'  },
  { label: 'Contact',    href: '#contact'    },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let frameId: number | null = null

    const updateScrolled = () => {
      setScrolled(window.scrollY > 120)
    }

    const requestScrolled = () => {
      if (frameId !== null) return
      frameId = window.requestAnimationFrame(() => {
        frameId = null
        updateScrolled()
      })
    }

    updateScrolled()
    window.addEventListener('scroll', requestScrolled, { passive: true })
    window.addEventListener('resize', requestScrolled)

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestScrolled)
      window.removeEventListener('resize', requestScrolled)
    }
  }, [])

  return (
    <nav
      data-scrolled={scrolled}
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? 'px-4 pt-3' : 'px-0 pt-0'
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between border backdrop-blur-md transition-[width,height,border-radius,padding,box-shadow,border-color] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? 'h-12 w-[min(56rem,calc(100vw-2rem))] rounded-full px-5' : 'h-14 w-full rounded-none px-6'
        }`}
        style={{
          backgroundColor: 'var(--c-nav-bg)',
          borderColor: scrolled ? 'var(--c-border)' : 'transparent',
          boxShadow: scrolled ? '0 16px 42px rgba(0,0,0,0.18)' : 'none',
        }}
      >
        <a href="#hero" className="font-mono text-sm font-bold tracking-wider" style={{ color: 'var(--c-accent)' }}>
          VC
        </a>
        <ul className="hidden md:flex gap-8 items-center">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-mono text-sm transition-colors hover:opacity-80"
                style={{ color: 'var(--c-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--c-accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--c-muted)')}
              >
                {label}
              </a>
            </li>
          ))}
          <li><ThemeToggle /></li>
        </ul>
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-lg leading-none"
            style={{ color: 'var(--c-muted)' }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {open && (
        <div
          className={`md:hidden mx-auto mt-2 max-w-4xl rounded-xl border px-6 py-4 backdrop-blur-md transition-all duration-300`}
          style={{ backgroundColor: 'var(--c-nav-bg)', borderColor: 'var(--c-border)' }}
        >
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="block font-mono text-sm py-2 transition-colors"
              style={{ color: 'var(--c-muted)' }}
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
