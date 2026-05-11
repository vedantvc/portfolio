'use client'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const skillGroups = [
  {
    label: 'Languages',
    skills: [
      { name: 'Java',        level: 95 },
      { name: 'Python',      level: 88 },
      { name: 'TypeScript',  level: 85 },
      { name: 'JavaScript',  level: 82 },
      { name: 'SQL',         level: 84 },
      { name: 'Node.js',     level: 80 },
    ],
  },
  {
    label: 'Backend & Frameworks',
    skills: [
      { name: 'Spring Boot',   level: 92 },
      { name: 'Spring Batch',  level: 86 },
      { name: 'Express.js',    level: 80 },
      { name: 'GraphQL',       level: 79 },
      { name: 'REST APIs',     level: 93 },
      { name: 'Microservices', level: 90 },
    ],
  },
  {
    label: 'AI & ML',
    skills: [
      { name: 'LangChain / LangGraph', level: 88 },
      { name: 'RAG Pipelines',         level: 86 },
      { name: 'OpenAI Embeddings',     level: 83 },
      { name: 'MCP Tool-Calling',      level: 80 },
      { name: 'PyTorch / HuggingFace', level: 76 },
      { name: 'Vector Databases',      level: 79 },
    ],
  },
  {
    label: 'Cloud & DevOps',
    skills: [
      { name: 'AWS',               level: 83 },
      { name: 'Azure',             level: 80 },
      { name: 'Docker / K8s',      level: 82 },
      { name: 'Terraform',         level: 76 },
      { name: 'GitHub Actions',    level: 85 },
      { name: 'Kafka',             level: 86 },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'Oracle',       level: 84 },
      { name: 'PostgreSQL',   level: 83 },
      { name: 'MySQL',        level: 80 },
      { name: 'MongoDB',      level: 78 },
      { name: 'Redis',        level: 76 },
      { name: 'ChromaDB',     level: 80 },
    ],
  },
  {
    label: 'Observability & Tools',
    skills: [
      { name: 'Datadog',        level: 78 },
      { name: 'Splunk',         level: 75 },
      { name: 'CloudWatch',     level: 80 },
      { name: 'Elasticsearch',  level: 74 },
      { name: 'Git',            level: 92 },
      { name: 'Jenkins',        level: 78 },
    ],
  },
]

function SkillBar({
  name, level, visible, delay,
}: { name: string; level: number; visible: boolean; delay: number }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between items-center mb-1">
        <span className="font-mono text-xs text-[#c7cfe0]">{name}</span>
        <span className="font-mono text-xs text-[#818cf8] tabular-nums">{level}%</span>
      </div>
      <div className="h-[5px] bg-[#1e2235] rounded-full overflow-hidden">
        <div
          className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-[#6366f1] via-[#818cf8] to-[#a5b4fc]"
          data-visible={visible}
          style={{ '--level': `${level}%`, transitionDelay: `${delay}ms` } as React.CSSProperties}
        />
      </div>
    </div>
  )
}

function SkillGroup({ group }: { group: typeof skillGroups[0] }) {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      data-visible={isVisible}
      className="scroll-reveal bg-[#131720]/80 backdrop-blur-sm border border-[#1e2235] p-4 hover:border-[#818cf8]/25 transition-colors duration-300"
    >
      <p className="font-mono text-[10px] font-bold text-[#818cf8] uppercase tracking-[0.12em] mb-4">
        {group.label}
      </p>
      {group.skills.map((s, i) => (
        <SkillBar
          key={s.name}
          name={s.name}
          level={s.level}
          visible={isVisible}
          delay={i * 100}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="skills" className="py-12 px-6 md:px-16 bg-[#0d1117]/40">
      <div className="max-w-5xl mx-auto">
        <h2
          ref={ref}
          data-visible={isVisible}
          className="scroll-reveal font-mono text-3xl font-bold text-white mb-8"
        >
          <span className="text-[#818cf8]">./</span>skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillGroups.map((g) => (
            <SkillGroup key={g.label} group={g} />
          ))}
        </div>
      </div>
    </section>
  )
}
