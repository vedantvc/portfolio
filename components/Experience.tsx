'use client'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const roles = [
  {
    company: 'PayPal',
    title: 'Software Engineer II',
    location: 'San Jose, CA',
    period: 'Apr 2025 – Present',
    bullets: [
      'Built Java/Spring Boot repayment microservices with Oracle persistence, processing 10M+ daily transactions across 16 products in 8 countries.',
      'Designed Spring Batch reconciliation workflows over distributed event streams, synchronizing settlement systems within 5s SLA.',
      'Delivered idempotent event-processing controls with request fingerprinting and audit-trail replay, ensuring exactly-once execution across 15K+ daily transactions.',
      'Enriched 500K+ daily repayment events with ML fraud detection signals, training a model to flag high-risk customers and trigger payment holds.',
    ],
    tags: ['Java', 'Spring Boot', 'Oracle', 'Spring Batch', 'Kafka', 'Microservices'],
  },
  {
    company: 'Oxmaint',
    title: 'AI Engineer',
    location: 'Sunnyvale, CA',
    period: 'Jul 2024 – Apr 2025',
    bullets: [
      'Built a production AI support agent using LangChain, LangGraph, and MCP tool-calling, eliminating repetitive support workflows by 30%.',
      'Designed RAG retrieval pipelines with ChromaDB vector search and OpenAI embeddings, improving retrieval accuracy by 60%.',
      'Deployed a quantized local LLM on NVIDIA Jetson Orin Nano for sub-second edge inference without external API dependency.',
      'Reduced Azure infrastructure spend by 20% and deployment time by 60% with Terraform and optimized GitHub Actions pipelines.',
    ],
    tags: ['Python', 'LangChain', 'LangGraph', 'RAG', 'ChromaDB', 'Azure', 'Terraform'],
  },
  {
    company: 'Berkshire Hathaway',
    title: 'Software Engineer',
    location: 'San Jose, CA',
    period: 'Aug 2023 – Jun 2024',
    bullets: [
      'Built full-stack customer portal features using Next.js, TypeScript, and GraphQL, reducing client-side API traffic by 30%.',
      'Architected Spring Boot microservices with JWT-based authentication and role-based authorization across distributed service boundaries.',
      'Standardized containerized deployments on AWS EC2 via Docker, eliminating configuration-driven deployment failures.',
      'Optimized PostgreSQL query plans and MongoDB aggregation indexes, reducing transaction latency by 35%.',
    ],
    tags: ['Next.js', 'TypeScript', 'GraphQL', 'Spring Security', 'AWS', 'Docker', 'PostgreSQL'],
  },
  {
    company: 'Logicon Technosolutions',
    title: 'Software Engineer',
    location: 'Pune, India',
    period: 'May 2020 – Jul 2021',
    bullets: [
      'Built responsive React frontends with reusable component libraries serving 200+ business users across role-segmented portal screens.',
      'Engineered Node.js and Express.js RESTful services, owning service-layer logic, schema migrations, and production support.',
      'Refactored MySQL schemas with targeted indexing, cutting dashboard load times by 50%.',
      'Streamlined Jenkins and Kubernetes CI/CD pipelines, shortening release cycle time by 40%.',
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MySQL', 'Jenkins', 'Kubernetes'],
  },
]

function RoleCard({ role, index }: { role: typeof roles[0]; index: number }) {
  const { ref, isVisible } = useIntersectionObserver()
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative md:w-[calc(50%-2rem)] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isLeft ? '-translate-x-8' : 'translate-x-8'}`
      } ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
    >
      <div className="bg-[#111118] border border-[#1e1e2e] p-6 hover:border-[#00ff88]/30 transition-colors">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-mono text-[#00ff88] font-bold">{role.company}</h3>
          <span className="font-mono text-xs text-[#8892a4]">{role.period}</span>
        </div>
        <p className="font-mono text-sm text-white mb-1">{role.title}</p>
        <p className="font-mono text-xs text-[#8892a4] mb-4">{role.location}</p>
        <ul className="space-y-2 mb-4">
          {role.bullets.map((bullet, i) => (
            <li key={i} className="text-sm text-[#8892a4] leading-relaxed flex gap-2">
              <span className="text-[#00ff88] mt-1 shrink-0">›</span>
              {bullet}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {role.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs px-2 py-0.5 border border-[#1e1e2e] text-[#8892a4]">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="experience" className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={ref}
          className={`font-mono text-3xl font-bold text-white mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-[#00ff88]">./</span><span>experience</span>
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#1e1e2e] -translate-x-1/2" />
          <div className="flex flex-col gap-12">
            {roles.map((role, i) => (
              <RoleCard key={role.company} role={role} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
