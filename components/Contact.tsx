'use client'
import { useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import Icon from '@/components/Icon'

const email = 'chidgopkarvedant02@gmail.com'

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver()
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyEmail = () => {
    navigator.clipboard?.writeText(email).catch(() => undefined)
    setCopiedEmail(true)
    window.setTimeout(() => setCopiedEmail(false), 1800)
  }

  return (
    <section id="contact" className="scroll-mt-16 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} data-visible={isVisible} className="scroll-reveal max-w-4xl">
          <p className="font-mono text-sm tracking-widest mb-4 uppercase" style={{ color: 'var(--c-accent)' }}>
            Available for backend, AI, cloud, and full-stack roles
          </p>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4 leading-tight md:whitespace-nowrap" style={{ color: 'var(--c-text)' }}>
            Let&apos;s build what lasts.
          </h2>
          <p className="text-base leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--c-muted)' }}>
            Based in San Jose, CA and open to engineering opportunities, product-minded teams,
            and conversations around scalable systems, applied AI, and cloud platforms.
          </p>

          <div className="grid gap-3 mb-8 sm:grid-cols-3">
            {[
              { value: email, href: `mailto:${email}`, icon: 'mail' as const, aria: 'Email Vedant', copy: true },
              { value: '+1 475 287 9053', href: 'tel:+14752879053', icon: 'phone' as const, aria: 'Call Vedant' },
              { value: 'San Jose, CA', href: 'https://www.google.com/maps/place/San+Jose,+CA', icon: 'pin' as const, aria: 'View San Jose location' },
            ].map((item) => (
              <a key={item.value} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={item.aria}
                title={item.copy ? 'Click to copy email' : item.aria}
                onClick={item.copy ? copyEmail : undefined}
                className="flex min-w-0 items-start gap-3 rounded-lg border p-4 backdrop-blur-sm transition-[border-color,box-shadow,color] duration-300"
                style={{ color: 'var(--c-muted)', borderColor: 'var(--c-border)', boxShadow: 'var(--c-card-shadow)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--c-accent)'
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.45)'
                  e.currentTarget.style.boxShadow = '0 18px 38px rgba(99,102,241,0.09)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--c-muted)'
                  e.currentTarget.style.borderColor = 'var(--c-border)'
                  e.currentTarget.style.boxShadow = 'var(--c-card-shadow)'
                }}>
                <Icon name={item.icon} className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="min-w-0 break-words text-sm">{item.value}</span>
              </a>
            ))}
          </div>
          <p
            aria-live="polite"
            className={`-mt-5 mb-8 font-mono text-xs transition-opacity duration-200 ${copiedEmail ? 'opacity-100' : 'opacity-0'}`}
            style={{ color: 'var(--c-accent)' }}
          >
            Email copied to clipboard
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a href="https://calendly.com/vedant-chidgopkar/30min" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border font-mono text-sm px-6 py-3 bg-[#6366f1] text-white font-bold transition-[background-color,border-color,box-shadow] duration-300 text-center"
              style={{ borderColor: 'rgba(99,102,241,0.45)', boxShadow: 'var(--c-card-shadow)' }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#818cf8'
                e.currentTarget.style.borderColor = 'rgba(129,140,248,0.72)'
                e.currentTarget.style.boxShadow = '0 18px 38px rgba(99,102,241,0.09)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#6366f1'
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.45)'
                e.currentTarget.style.boxShadow = 'var(--c-card-shadow)'
              }}>
              Schedule a Meeting
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] mb-3" style={{ color: 'var(--c-accent)' }}>
              Follow Me
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com/in/vedant-chidgopkar', icon: 'linkedin' as const },
                { label: 'GitHub', href: 'https://github.com/vedantvc', icon: 'github' as const },
              ].map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors"
                  style={{ color: 'var(--c-muted)', borderColor: 'var(--c-border)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--c-accent)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--c-muted)'; e.currentTarget.style.borderColor = 'var(--c-border)' }}>
                  <Icon name={icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--c-border)' }}>
          <p className="font-mono text-xs" style={{ color: 'var(--c-muted)' }}>
            © 2026 Vedant Chidgopkar · Built with ❤️ and a suspicious amount of ☕
          </p>
        </div>
      </div>
    </section>
  )
}
