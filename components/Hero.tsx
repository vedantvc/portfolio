'use client'
import { useEffect, useState } from 'react'
import Icon from '@/components/Icon'

const titles = ['Software Engineer', 'AI Engineer', 'Cloud Engineer', 'Full-Stack Developer']
const email = 'chidgopkarvedant02@gmail.com'

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  useEffect(() => {
    const current = titles[titleIndex]
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && displayed.length < current.length)
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    else if (!deleting && displayed.length === current.length)
      timeout = setTimeout(() => setDeleting(true), 2000)
    else if (deleting && displayed.length > 0)
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    else { setDeleting(false); setTitleIndex(i => (i + 1) % titles.length) }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIndex])

  const copyEmail = () => {
    navigator.clipboard?.writeText(email).catch(() => undefined)
    setCopiedEmail(true)
    window.setTimeout(() => setCopiedEmail(false), 1800)
  }

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 md:px-16 pt-14 overflow-hidden">
      <div className="max-w-7xl w-full min-[1440px]:mx-auto min-[1440px]:text-center">
        <p className="hero-item font-mono text-sm tracking-widest mb-4 opacity-60"
          style={{ color: 'var(--c-accent)', animationDelay: '0ms' }}>
          Hi, I&apos;m
        </p>
        <h1 className="hero-item font-mono text-4xl sm:text-5xl md:text-7xl min-[1440px]:text-[5.35rem] font-bold mb-4 tracking-tight leading-none"
          style={{ color: 'var(--c-text)', animationDelay: '100ms' }}>
          <span className="block">VEDANT</span>
          <span className="block bg-gradient-to-r from-[#6366f1] via-[#818cf8] to-[#67e8f9] bg-clip-text text-transparent">
            CHIDGOPKAR
          </span>
        </h1>
        <div className="hero-item font-mono text-lg md:text-2xl min-[1440px]:text-[1.75rem] mb-6 h-8 min-[1440px]:h-10 flex items-center min-[1440px]:justify-center"
          style={{ color: 'var(--c-accent)', animationDelay: '200ms' }}>
          {displayed}<span className="animate-pulse ml-0.5" style={{ color: 'var(--c-accent-soft)' }}>|</span>
        </div>
        <p className="hero-item text-sm sm:text-base md:text-lg max-w-2xl min-[1440px]:max-w-3xl mb-10 leading-relaxed min-[1440px]:mx-auto"
          style={{ color: 'var(--c-muted)', animationDelay: '300ms' }}>
          Production systems built for reliability: payment workflows, AI support agents,
          cloud infrastructure, and full-stack tools designed to hold up in the real world.
        </p>
        <div className="hero-item flex flex-col items-start gap-2 min-[1440px]:items-center" style={{ animationDelay: '400ms' }}>
          <div className="flex flex-wrap items-center gap-3 min-[1440px]:justify-center">
            <a href="/resume.pdf" download="Resume_Vedant_Chidgopkar.pdf"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm px-4 sm:px-5 py-2.5 bg-[#6366f1] text-white font-bold hover:bg-[#818cf8] transition-colors rounded-md">
              <Icon name="download" className="h-4 w-4" />
              Download Resume
            </a>
            <div className="flex gap-2">
              {[
                { label: 'Email', href: `mailto:${email}`, icon: 'mail' as const },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/vedant-chidgopkar', icon: 'linkedin' as const },
                { label: 'GitHub', href: 'https://github.com/vedantvc', icon: 'github' as const },
              ].map(({ label, href, icon }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                title={label === 'Email' ? 'Copy email' : undefined}
                onClick={label === 'Email' ? copyEmail : undefined}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors"
                  style={{ color: 'var(--c-muted)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--c-accent)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--c-muted)'; e.currentTarget.style.borderColor = 'var(--c-border)' }}>
                  <Icon name={icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <span
            aria-live="polite"
            className={`font-mono text-xs transition-opacity duration-200 ${copiedEmail ? 'opacity-100' : 'opacity-0'}`}
            style={{ color: 'var(--c-accent)' }}
          >
            Email copied to clipboard
          </span>
        </div>
        <a
          href="#about"
          className="scroll-cue mt-10 inline-flex items-center gap-2 font-mono text-xs sm:text-sm transition-colors min-[1440px]:mx-auto"
          style={{ color: 'var(--c-muted)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--c-accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--c-muted)')}
        >
          <span className="text-base leading-none">↓</span>
          <span>Scroll to explore</span>
        </a>
      </div>
    </section>
  )
}
