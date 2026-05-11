'use client'
import { useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import Icon from '@/components/Icon'

type Category = 'All' | 'AI/ML' | 'Fintech' | 'Full-Stack'

const FILTERS: Category[] = ['All', 'AI/ML', 'Fintech', 'Full-Stack']

const projects = [
  {
    title: 'AI Support Agent',
    desc: 'Production AI agent using LangChain, LangGraph, and MCP tool-calling that connects to telemetry and internal REST APIs, eliminating 30% of repetitive support workflows.',
    tags: ['Python', 'LangChain', 'LangGraph', 'MCP'],
    category: 'AI/ML' as Category,
    highlight: '30% workflow reduction',
    company: 'Oxmaint',
  },
  {
    title: 'RAG Retrieval Pipeline',
    desc: 'ChromaDB vector search pipeline with OpenAI embeddings, Pandas preprocessing, document ingestion, chunking, and metadata filtering for a multi-tenant CMMS platform.',
    tags: ['Python', 'ChromaDB', 'OpenAI', 'RAG'],
    category: 'AI/ML' as Category,
    highlight: '60% accuracy improvement',
    company: 'Oxmaint',
  },
  {
    title: 'Edge LLM Deployment',
    desc: 'Quantized local LLM using PyTorch and Hugging Face Transformers deployed on NVIDIA Jetson Orin Nano for sub-second edge inference without external API dependency.',
    tags: ['PyTorch', 'HuggingFace', 'Jetson', 'Python'],
    category: 'AI/ML' as Category,
    highlight: 'Sub-second edge inference',
    company: 'Oxmaint',
  },
  {
    title: 'ML Fraud Detection',
    desc: 'Risk-based payment controls that enrich 500K+ daily repayment events with customer risk signals and train a fraud-detection model to autonomously flag high-risk customers.',
    tags: ['Java', 'Spring Boot', 'ML', 'Kafka'],
    category: 'Fintech' as Category,
    highlight: '500K+ events/day enriched',
    company: 'PayPal',
  },
  {
    title: 'Repayment Microservices',
    desc: 'Java/Spring Boot repayment microservices with Oracle persistence, idempotent request handling, and Spring Batch reconciliation across 16 products in 8 countries.',
    tags: ['Java', 'Spring Boot', 'Oracle', 'Spring Batch'],
    category: 'Fintech' as Category,
    highlight: '10M+ daily transactions',
    company: 'PayPal',
  },
  {
    title: 'Customer Portal',
    desc: 'Full-stack customer portal with Next.js, TypeScript, and GraphQL featuring typed data fetching and batched backend requests, reducing API traffic by 30%.',
    tags: ['Next.js', 'TypeScript', 'GraphQL', 'Spring Boot'],
    category: 'Full-Stack' as Category,
    highlight: '30% less API traffic',
    company: 'Berkshire Hathaway',
  },
]

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      data-visible={isVisible}
      className="scroll-reveal rounded-lg backdrop-blur-sm border p-5 flex flex-col hover:-translate-y-1 transition-[border-color,box-shadow,transform] duration-300"
      style={{
        backgroundColor: 'var(--c-surface)',
        borderColor: 'var(--c-border)',
        boxShadow: 'var(--c-card-shadow)',
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)'
        e.currentTarget.style.boxShadow = '0 18px 38px rgba(99,102,241,0.09)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--c-border)'
        e.currentTarget.style.boxShadow = 'var(--c-card-shadow)'
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-mono text-sm font-bold" style={{ color: 'var(--c-text)' }}>{project.title}</h3>
          <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--c-accent)' }}>{project.company}</p>
        </div>
        <span className="font-mono text-xs text-[#6366f1] bg-[#6366f1]/10 border border-[#6366f1]/20 px-2 py-0.5 rounded-md shrink-0">
          {project.highlight}
        </span>
      </div>

      <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: 'var(--c-muted)' }}>{project.desc}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-md font-mono text-xs px-2 py-0.5 border"
            style={{ backgroundColor: 'var(--c-tag-bg)', borderColor: 'var(--c-border)', color: 'var(--c-muted)' }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState<Category>('All')
  const { ref, isVisible } = useIntersectionObserver()

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="scroll-mt-16 py-12 px-6 md:px-16" style={{ backgroundColor: 'var(--c-section-alt)' }}>
      <div className="max-w-7xl mx-auto">
        <h2
          ref={ref}
          data-visible={isVisible}
          className="scroll-reveal font-mono text-3xl font-bold mb-8"
          style={{ color: 'var(--c-text)' }}
        >
          <Icon name="rocket" className="inline h-8 w-8 align-[-0.18em]" /> Featured Projects
        </h2>
        <p
          data-visible={isVisible}
          className="scroll-reveal text-base mb-8 max-w-4xl"
          style={{ color: 'var(--c-muted)', transitionDelay: '60ms' }}
        >
          Selected work across AI automation, fintech systems, edge inference, and full-stack product delivery.
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-md font-mono text-xs px-4 py-1.5 border transition-colors duration-200 ${
                active === f
                  ? 'border-[#6366f1] text-white bg-[#6366f1]/80'
                  : 'hover:border-[#818cf8]/60'
              }`}
              style={active === f ? undefined : { color: 'var(--c-muted)', borderColor: 'var(--c-border)' }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
