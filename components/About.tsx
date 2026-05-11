'use client'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const pillars = [
  {
    icon: '⚙️',
    title: 'Distributed Systems',
    desc: 'Designing fault-tolerant, high-concurrency services — from idempotent payment pipelines processing 10M+ daily transactions to Kafka event-driven architectures.',
  },
  {
    icon: '🤖',
    title: 'AI Engineering',
    desc: 'Building production AI agents with LangChain, LangGraph, and RAG pipelines. Deployed quantized LLMs on edge hardware and MCP-based tool-calling systems.',
  },
  {
    icon: '🌐',
    title: 'Full-Stack Web',
    desc: 'End-to-end product development with Next.js, TypeScript, Spring Boot, and GraphQL — from customer portals to containerized cloud deployments on AWS and Azure.',
  },
]

export default function About() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="about" className="py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2
          ref={ref}
          data-visible={isVisible}
          className="scroll-reveal font-mono text-3xl font-bold text-white mb-6"
        >
          <span className="text-[#818cf8]">./</span>about
        </h2>

        <p
          data-visible={isVisible}
          className="scroll-reveal text-[#8892a4] text-lg leading-relaxed mb-12 max-w-3xl"
          style={{ transitionDelay: '80ms' }}
        >
          Software Engineer based in San Jose, CA with 4+ years crafting scalable systems across
          fintech and enterprise platforms. Currently at PayPal building repayment infrastructure.
          Passionate about the intersection of distributed systems and AI engineering — from
          payment microservices handling millions of transactions to production AI agents running
          at the edge.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              data-visible={isVisible}
              className="scroll-reveal bg-[#131720]/80 backdrop-blur-sm border border-[#1e2235] p-5 hover:border-[#6366f1]/50 hover:shadow-[0_0_24px_rgba(99,102,241,0.1)] transition-[border-color,box-shadow] duration-300"
              style={{ transitionDelay: `${160 + i * 100}ms` }}
            >
              <span className="text-2xl mb-3 block">{p.icon}</span>
              <h3 className="font-mono text-sm font-bold text-white mb-2">{p.title}</h3>
              <p className="text-xs text-[#8892a4] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
