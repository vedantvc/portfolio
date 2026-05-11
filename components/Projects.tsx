'use client'
import { useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

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
      className="scroll-reveal bg-[#131720]/80 backdrop-blur-sm border border-[#1e2235] p-5 flex flex-col hover:border-[#6366f1]/50 hover:shadow-[0_0_24px_rgba(99,102,241,0.08)] hover:-translate-y-1 transition-[border-color,box-shadow,transform] duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-mono text-sm font-bold text-white">{project.title}</h3>
          <p className="font-mono text-xs text-[#818cf8] mt-0.5">{project.company}</p>
        </div>
        <span className="font-mono text-xs text-[#6366f1] bg-[#6366f1]/10 border border-[#6366f1]/20 px-2 py-0.5 rounded shrink-0">
          {project.highlight}
        </span>
      </div>

      <p className="text-xs text-[#8892a4] leading-relaxed mb-4 flex-1">{project.desc}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-xs px-2 py-0.5 bg-[#0d1117]/60 border border-[#1e2235] text-[#8892a4]">
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
    <section id="projects" className="py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2
          ref={ref}
          data-visible={isVisible}
          className="scroll-reveal font-mono text-3xl font-bold text-white mb-8"
        >
          <span className="text-[#818cf8]">./</span>projects
        </h2>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-mono text-xs px-4 py-1.5 border transition-colors duration-200 ${
                active === f
                  ? 'border-[#6366f1] text-white bg-[#6366f1]/20'
                  : 'border-[#1e2235] text-[#8892a4] hover:border-[#818cf8]/40 hover:text-[#818cf8]'
              }`}
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
