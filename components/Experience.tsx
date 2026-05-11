'use client'
import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import Icon from '@/components/Icon'

const roles = [
  {
    company: 'PayPal', url: 'https://www.paypal.com', title: 'Software Engineer II', location: 'San Jose, CA', period: 'Apr 2025 - Present',
    bullets: [
      'Built Java/Spring Boot repayment microservices with Oracle persistence, processing 10M+ daily transactions across 16 products in 8 countries.',
      'Designed Spring Batch reconciliation workflows over distributed event streams, synchronizing settlement systems within 5s SLA.',
      'Delivered idempotent event-processing controls with request fingerprinting and audit-trail replay, ensuring exactly-once execution across 15K+ daily transactions.',
      'Enriched 500K+ daily repayment events with ML fraud detection signals, training a model to flag high-risk customers and trigger payment holds.',
    ],
    tags: ['Java', 'Spring Boot', 'Oracle', 'Spring Batch', 'Kafka', 'Microservices'],
  },
  {
    company: 'Oxmaint', url: 'https://oxmaint.com', title: 'AI Engineer', location: 'Sunnyvale, CA', period: 'Jul 2024 - Apr 2025',
    bullets: [
      'Built a production AI support agent using LangChain, LangGraph, and MCP tool-calling, eliminating repetitive support workflows by 30%.',
      'Designed RAG retrieval pipelines with ChromaDB vector search and OpenAI embeddings, improving retrieval accuracy by 60%.',
      'Deployed a quantized local LLM on NVIDIA Jetson Orin Nano for sub-second edge inference without external API dependency.',
      'Reduced Azure infrastructure spend by 20% and deployment time by 60% with Terraform and optimized GitHub Actions pipelines.',
    ],
    tags: ['Python', 'LangChain', 'LangGraph', 'RAG', 'ChromaDB', 'Azure', 'Terraform'],
  },
  {
    company: 'Berkshire Hathaway', url: 'https://www.berkshirehathaway.com', title: 'Software Engineer', location: 'San Jose, CA', period: 'Aug 2023 - Jun 2024',
    bullets: [
      'Built full-stack customer portal features using Next.js, TypeScript, and GraphQL, reducing client-side API traffic by 30%.',
      'Architected Spring Boot microservices with JWT-based authentication and role-based authorization across distributed service boundaries.',
      'Standardized containerized deployments on AWS EC2 via Docker, eliminating configuration-driven deployment failures.',
      'Optimized PostgreSQL query plans and MongoDB aggregation indexes, reducing transaction latency by 35%.',
    ],
    tags: ['Next.js', 'TypeScript', 'GraphQL', 'Spring Boot', 'Spring Security', 'AWS', 'Docker', 'PostgreSQL'],
  },
  {
    company: 'Logicon Technosolutions', url: 'https://www.logicontech.com/', title: 'Software Engineer', location: 'Pune, India', period: 'May 2020 - Jul 2021',
    bullets: [
      'Built responsive React frontends with reusable component libraries serving 200+ business users across role-segmented portal screens.',
      'Engineered Node.js and Express.js RESTful services, owning service-layer logic, schema migrations, and production support.',
      'Refactored MySQL schemas with targeted indexing, cutting dashboard load times by 50%.',
      'Streamlined Jenkins and Kubernetes CI/CD pipelines, shortening release cycle time by 40%.',
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MySQL', 'Jenkins', 'Kubernetes'],
  },
]

function RoleCard({ role }: { role: typeof roles[0] }) {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <div ref={ref} data-visible={isVisible} className="scroll-reveal relative pl-8 pb-6 last:pb-0">
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full ring-4 animate-dot-pulse"
        style={{ backgroundColor: '#6366f1', '--tw-ring-color': 'rgba(129,140,248,0.2)' } as React.CSSProperties} />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <div>
          <a
            href={role.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-lg font-bold transition-colors"
            style={{ color: 'var(--c-text)' }}
          >
            <Icon name="building" className="h-5 w-5" />
            <span>{role.company}</span>
            <span className="text-xs opacity-60 transition-transform group-hover:translate-x-0.5" aria-hidden="true">↗</span>
          </a>
          <p className="mt-1 flex items-center gap-2 font-mono text-sm" style={{ color: 'var(--c-accent)' }}>
            <Icon name="laptop" className="h-4 w-4" />
            {role.title}
          </p>
        </div>
        <div className="shrink-0 space-y-1 sm:text-right">
          <p className="flex items-center gap-2 font-mono text-xs sm:justify-end" style={{ color: 'var(--c-muted)' }}>
            <Icon name="calendar" className="h-4 w-4" />
            {role.period}
          </p>
          <p className="flex items-center gap-2 font-mono text-xs sm:justify-end" style={{ color: 'var(--c-muted)' }}>
            <Icon name="pin" className="h-4 w-4" />
            {role.location}
          </p>
        </div>
      </div>
      <div className="rounded-lg backdrop-blur-sm border p-5 transition-colors duration-200"
        style={{ backgroundColor: 'var(--c-surface)', borderColor: 'var(--c-border)', boxShadow: 'var(--c-card-shadow)' }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--c-border)')}>
        <ul className="space-y-2 mb-4">
          {role.bullets.map((b, i) => (
            <li key={i} className="text-sm leading-relaxed flex gap-2" style={{ color: 'var(--c-muted)' }}>
              <span className="mt-1 shrink-0" style={{ color: 'var(--c-accent)' }}>›</span>{b}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {role.tags.map(tag => (
            <span key={tag} className="rounded-md font-mono text-xs px-2 py-0.5 border transition-colors duration-150"
              style={{ color: 'var(--c-muted)', borderColor: 'var(--c-border)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; e.currentTarget.style.color = 'var(--c-accent)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--c-border)'; e.currentTarget.style.color = 'var(--c-muted)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const { ref, isVisible } = useIntersectionObserver()
  const timelineRef = useRef<HTMLDivElement>(null)
  const [lineProgress, setLineProgress] = useState(0)

  useEffect(() => {
    let frameId: number | null = null

    const updateLineProgress = () => {
      if (!timelineRef.current) return

      const rect = timelineRef.current.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const timelineStart = rect.top + 8
      const timelineEnd = rect.bottom - 180
      const nextProgress = Math.min(Math.max((viewportCenter - timelineStart) / (timelineEnd - timelineStart), 0), 1)

      setLineProgress(nextProgress)
    }

    const requestLineProgress = () => {
      if (frameId !== null) return

      frameId = window.requestAnimationFrame(() => {
        frameId = null
        updateLineProgress()
      })
    }

    updateLineProgress()
    window.addEventListener('scroll', requestLineProgress, { passive: true })
    window.addEventListener('resize', requestLineProgress)

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestLineProgress)
      window.removeEventListener('resize', requestLineProgress)
    }
  }, [])

  return (
    <section id="experience" className="scroll-mt-16 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 ref={ref} data-visible={isVisible}
          className="scroll-reveal font-mono text-3xl font-bold mb-10"
          style={{ color: 'var(--c-text)' }}>
          <Icon name="briefcase" className="inline h-8 w-8 align-[-0.18em]" /> Experience
        </h2>
        <p data-visible={isVisible}
          className="scroll-reveal text-base mb-10 max-w-4xl"
          style={{ color: 'var(--c-muted)', transitionDelay: '60ms' }}>
          Production work across backend, AI, cloud, and frontend systems, with a focus on reliability and scale.
        </p>
        <div ref={timelineRef} className="relative">
          <div className="absolute left-[5px] top-2 bottom-0 w-px" style={{ backgroundColor: 'var(--c-border)' }} />
          <div
            className="absolute left-[5px] top-2 bottom-0 w-px origin-top bg-gradient-to-b from-[#6366f1] via-[#818cf8] to-[#67e8f9] will-change-transform"
            style={{ transform: `scaleY(${lineProgress})` }}
          />
          <div className="space-y-0">
            {roles.map(role => <RoleCard key={role.company} role={role} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
