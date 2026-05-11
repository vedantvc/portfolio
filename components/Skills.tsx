'use client'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const skillGroups = [
  {
    label: 'Languages & Backend',
    skills: [
      { name: 'Java',             level: 95 },
      { name: 'Spring Boot',      level: 92 },
      { name: 'Python',           level: 88 },
      { name: 'TypeScript',       level: 85 },
      { name: 'Node.js',          level: 80 },
    ],
  },
  {
    label: 'AI & ML',
    skills: [
      { name: 'LangChain / LangGraph', level: 88 },
      { name: 'RAG Pipelines',         level: 86 },
      { name: 'OpenAI / Embeddings',   level: 83 },
      { name: 'MCP Tool-Calling',      level: 80 },
      { name: 'Vector Databases',      level: 78 },
    ],
  },
  {
    label: 'Cloud & DevOps',
    skills: [
      { name: 'AWS / Azure',          level: 83 },
      { name: 'Docker / Kubernetes',  level: 82 },
      { name: 'Terraform',            level: 76 },
      { name: 'GitHub Actions',       level: 85 },
      { name: 'Kafka',                level: 86 },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'Oracle / PostgreSQL',  level: 85 },
      { name: 'MongoDB',              level: 78 },
      { name: 'MySQL',                level: 80 },
      { name: 'Redis',                level: 76 },
      { name: 'ChromaDB',             level: 80 },
    ],
  },
]

function SkillBar({ name, level, visible, delay }: { name: string; level: number; visible: boolean; delay: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-sm text-[#c7cfe0]">{name}</span>
        <span className="font-mono text-xs text-[#818cf8]">{level}%</span>
      </div>
      <div className="h-1.5 bg-[#1e2235] rounded-full overflow-hidden">
        <div
          className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-[#6366f1] to-[#a5b4fc]"
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
      className="scroll-reveal bg-[#131720]/80 backdrop-blur-sm border border-[#1e2235] p-5 hover:border-[#818cf8]/30 transition-colors duration-300"
    >
      <h3 className="font-mono text-xs font-bold text-[#818cf8] uppercase tracking-widest mb-5">
        {group.label}
      </h3>
      {group.skills.map((s, i) => (
        <SkillBar key={s.name} name={s.name} level={s.level} visible={isVisible} delay={i * 120} />
      ))}
    </div>
  )
}

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="skills" className="py-20 px-6 md:px-16 bg-[#0d1117]/40">
      <div className="max-w-5xl mx-auto">
        <h2
          ref={ref}
          data-visible={isVisible}
          className="scroll-reveal font-mono text-3xl font-bold text-white mb-10"
        >
          <span className="text-[#818cf8]">./</span>skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillGroups.map((g) => (
            <SkillGroup key={g.label} group={g} />
          ))}
        </div>
      </div>
    </section>
  )
}
