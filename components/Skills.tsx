'use client'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const skillGroups = [
  {
    label: 'AI & ML Engineering',
    icon: '⚡',
    skills: ['LangChain', 'LangGraph', 'RAG Pipelines', 'ChromaDB', 'MCP Tool-Calling', 'OpenAI Embeddings', 'Edge LLM', 'Vector Databases', 'Prompt Engineering'],
  },
  {
    label: 'Distributed Systems',
    icon: '◈',
    skills: ['Kafka', 'Event-Driven Architecture', 'Idempotency Controls', 'Spring Batch', 'High-Concurrency', 'Fault Tolerance', 'Low-Latency Services'],
  },
  {
    label: 'Java Backend Core',
    icon: '▣',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'REST APIs', 'Microservices', 'JWT Auth', 'GraphQL'],
  },
  {
    label: 'Full-Stack Web',
    icon: '◇',
    skills: ['Next.js', 'TypeScript', 'React', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    label: 'Cloud & DevOps',
    icon: '△',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins', 'Redis', 'CI/CD'],
  },
  {
    label: 'PayPal Fintech',
    icon: '▤',
    skills: ['Oracle', 'Transaction Processing', 'ACID', 'Fraud Detection ML', 'PCI-DSS', 'GDPR', 'Reconciliation'],
  },
  {
    label: 'Observability',
    icon: '◎',
    skills: ['Datadog', 'Splunk', 'Amazon CloudWatch', 'Elasticsearch', 'Query Optimization', 'Indexing'],
  },
]

function SkillCard({ group, delay }: { group: typeof skillGroups[0]; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`bg-[#111118] border border-[#1e1e2e] p-5 hover:border-[#00ff88]/40 hover:shadow-[0_0_20px_rgba(0,255,136,0.05)] transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-[#00ff88] text-sm">{group.icon}</span>
        <h3 className="font-mono text-sm font-bold text-white">{group.label}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs px-2 py-0.5 bg-[#0a0a0f] border border-[#1e1e2e] text-[#8892a4] hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="skills" className="py-24 px-6 md:px-16 bg-[#0d0d12]">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={ref}
          className={`font-mono text-3xl font-bold text-white mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-[#00ff88]">./</span><span>skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.label} group={group} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
