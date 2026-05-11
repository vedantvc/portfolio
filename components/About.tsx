'use client'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import Icon from '@/components/Icon'

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '4', label: 'Companies Worked' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '20+', label: 'Technologies' },
]

export default function About() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="about" className="scroll-mt-16 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="h-px w-px" aria-hidden="true" />
        <h2 data-visible={isVisible}
          className="scroll-reveal font-mono text-3xl font-bold mb-5"
          style={{ color: 'var(--c-text)' }}>
          <Icon name="user" className="inline h-8 w-8 align-[-0.18em]" /> About Me
        </h2>
        <p data-visible={isVisible}
          className="scroll-reveal text-sm md:text-base mb-5 max-w-4xl"
          style={{ color: 'var(--c-muted)', transitionDelay: '40ms' }}>
          Building dependable software for products that need to move fast without breaking trust.
        </p>
        <div className="grid gap-5 mb-8 max-w-5xl text-base leading-relaxed" style={{ color: 'var(--c-muted)' }}>
          <p data-visible={isVisible} className="scroll-reveal" style={{ transitionDelay: '80ms' }}>
            Based in San Jose with a Master&apos;s in Computer Science, I work across backend engineering, applied AI,
            cloud infrastructure, and full-stack development. My experience spans fintech platforms, AI support agents
            that automate repetitive operations, and customer-facing products where performance and reliability matter every day.
          </p>
          <p data-visible={isVisible} className="scroll-reveal" style={{ transitionDelay: '120ms' }}>
            The common thread is practical engineering: taking complex requirements, shaping them into clear systems, and
            shipping software that teams can trust in production. Always open to strong engineering teams, meaningful product
            problems, and conversations that start with an interesting idea.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((stat, i) => (
            <div key={stat.label} data-visible={isVisible}
              className="scroll-reveal rounded-lg border p-5 text-center backdrop-blur-sm transition-[border-color,transform] duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--c-surface)',
                borderColor: 'var(--c-border)',
                boxShadow: 'var(--c-card-shadow)',
                transitionDelay: `${150 + i * 70}ms`,
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--c-border)')}>
              <p className="font-mono text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--c-accent)' }}>{stat.value}</p>
              <p className="text-sm md:text-base" style={{ color: 'var(--c-muted)' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
