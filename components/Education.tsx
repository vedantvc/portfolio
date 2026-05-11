'use client'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import Icon from '@/components/Icon'

const degrees = [
  {
    degree: 'M.S. Computer Science',
    school: 'University of New Haven',
    url: 'https://www.newhaven.edu/index.php',
    location: 'West Haven, CT',
    period: 'Aug 2021 - May 2023',
  },
  {
    degree: 'B.E. Computer Engineering',
    school: 'Savitribai Phule Pune University',
    url: 'https://www.unipune.ac.in/',
    location: 'Pune, India',
    period: 'Aug 2016 - May 2020',
  },
]

function DegreeCard({ deg, delay }: { deg: typeof degrees[0]; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      data-visible={isVisible}
      className="scroll-reveal rounded-lg backdrop-blur-sm border p-6 hover:scale-[1.02] transition-[border-color,box-shadow,transform] duration-300"
      style={{
        backgroundColor: 'var(--c-surface)',
        borderColor: 'var(--c-border)',
        boxShadow: 'var(--c-card-shadow)',
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.45)'
        e.currentTarget.style.boxShadow = '0 18px 38px rgba(99,102,241,0.09)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--c-border)'
        e.currentTarget.style.boxShadow = 'var(--c-card-shadow)'
      }}
    >
      <div className="grid gap-2">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="font-mono text-lg font-bold" style={{ color: 'var(--c-text)' }}>{deg.degree}</h3>
          <p className="font-mono text-xs sm:text-right" style={{ color: 'var(--c-muted)' }}>{deg.period}</p>
        </div>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <a
            href={deg.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-mono text-sm transition-colors"
            style={{ color: 'var(--c-accent)' }}
          >
            <span>{deg.school}</span>
            <span className="text-xs opacity-60 transition-transform group-hover:translate-x-0.5" aria-hidden="true">↗</span>
          </a>
          <p className="font-mono text-xs sm:text-right" style={{ color: 'var(--c-muted)' }}>{deg.location}</p>
        </div>
      </div>
      <div className="mt-5 h-px bg-gradient-to-r from-[#6366f1]/40 via-[#818cf8]/20 to-transparent" />
    </div>
  )
}

export default function Education() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="academics" className="scroll-mt-16 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={ref}
          data-visible={isVisible}
          className="scroll-reveal font-mono text-3xl font-bold mb-4"
          style={{ color: 'var(--c-text)' }}
        >
          <Icon name="cap" className="inline h-8 w-8 align-[-0.18em]" /> Academics
        </h2>
        <p
          data-visible={isVisible}
          className="scroll-reveal text-base mb-8 max-w-4xl"
          style={{ color: 'var(--c-muted)', transitionDelay: '60ms' }}
        >
          Knowledge that compounds into sharper engineering judgment, stronger fundamentals, and better systems thinking.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {degrees.map((deg, i) => (
            <DegreeCard key={deg.school} deg={deg} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}
