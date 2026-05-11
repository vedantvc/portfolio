'use client'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const pillars = [
  {
    icon: '⚙️',
    title: 'Distributed Systems',
    desc: 'Fault-tolerant, high-concurrency services built for zero failure tolerance — idempotent pipelines, Kafka event streams, exactly-once guarantees at scale.',
  },
  {
    icon: '🤖',
    title: 'AI Engineering',
    desc: 'Production AI agents, RAG pipelines, and LLMs running at the edge — systems that make autonomous decisions you can trust.',
  },
  {
    icon: '🌐',
    title: 'Full-Stack',
    desc: 'From API contracts to UI — Next.js, TypeScript, Spring Boot, GraphQL, and cloud deployments that ship and stay up.',
  },
]

export default function About() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="about" className="py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2
          ref={ref}
          data-visible={isVisible}
          className="scroll-reveal font-mono text-3xl font-bold text-[#1a1d2e] dark:text-white mb-5"
        >
          <span className="text-[#6366f1] dark:text-[#818cf8]">./</span>about
        </h2>

        <p
          data-visible={isVisible}
          className="scroll-reveal text-[#5a6280] dark:text-[#9aa3b5] text-base leading-relaxed mb-8 max-w-3xl"
          style={{ transitionDelay: '80ms' }}
        >
          I build systems that can&apos;t afford to fail. The kind that process millions of transactions,
          make autonomous decisions in real time, and scale without breaking. My work sits at the
          intersection of distributed architecture and applied AI — not as separate disciplines, but
          as a single craft. I care about correctness, resilience, and the engineering of things
          people actually depend on.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              data-visible={isVisible}
              className="scroll-reveal bg-white/80 dark:bg-[#131720]/80 backdrop-blur-sm border border-[#d4d8f0] dark:border-[#1e2235] p-4 hover:border-[#6366f1]/40 dark:hover:border-[#6366f1]/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)] transition-[border-color,box-shadow] duration-300"
              style={{ transitionDelay: `${160 + i * 80}ms` }}
            >
              <span className="text-xl mb-2 block">{p.icon}</span>
              <h3 className="font-mono text-xs font-bold text-[#1a1d2e] dark:text-white mb-1.5">{p.title}</h3>
              <p className="text-xs text-[#5a6280] dark:text-[#8892a4] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
