'use client'
import { useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import Icon from '@/components/Icon'

const skillGroups = [
  {
    label: 'Languages',
    summary: 'Core programming languages I use for production services, AI workflows, and frontend delivery.',
    skills: [
      { name: 'Java', level: 95 },
      { name: 'Python', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 82 },
      { name: 'SQL', level: 84 },
      { name: 'Node.js', level: 80 },
      { name: 'C++', level: 72 },
      { name: 'Shell Scripting', level: 74 },
    ],
  },
  {
    label: 'Backend & Frameworks',
    summary: 'Frameworks and service patterns for APIs, batch systems, auth, and high-volume business workflows.',
    skills: [
      { name: 'Spring Boot', level: 92 },
      { name: 'Spring Batch', level: 86 },
      { name: 'Express.js', level: 80 },
      { name: 'GraphQL', level: 79 },
      { name: 'REST APIs', level: 93 },
      { name: 'Microservices', level: 90 },
      { name: 'Spring Security', level: 84 },
      { name: 'JWT / OAuth', level: 82 },
      { name: 'JPA / Hibernate', level: 83 },
      { name: 'Event-Driven Design', level: 86 },
    ],
  },
  {
    label: 'AI & ML',
    summary: 'Applied AI tooling for retrieval, agent workflows, embeddings, and edge inference.',
    skills: [
      { name: 'LangChain / LangGraph', level: 88 },
      { name: 'RAG Pipelines', level: 86 },
      { name: 'OpenAI Embeddings', level: 83 },
      { name: 'MCP Tool-Calling', level: 80 },
      { name: 'PyTorch / HuggingFace', level: 76 },
      { name: 'Vector Databases', level: 79 },
      { name: 'Prompt Engineering', level: 84 },
      { name: 'Edge LLMs', level: 78 },
      { name: 'Pandas', level: 82 },
      { name: 'Model Evaluation', level: 74 },
    ],
  },
  {
    label: 'Cloud & DevOps',
    summary: 'Cloud, containers, automation, and event infrastructure for shipping reliable systems.',
    skills: [
      { name: 'AWS', level: 83 },
      { name: 'Azure', level: 80 },
      { name: 'Docker / K8s', level: 82 },
      { name: 'Terraform', level: 76 },
      { name: 'GitHub Actions', level: 85 },
      { name: 'Kafka', level: 86 },
      { name: 'Kubernetes', level: 80 },
      { name: 'CI/CD Pipelines', level: 84 },
      { name: 'AWS EC2 / RDS', level: 82 },
      { name: 'Azure DevOps', level: 78 },
    ],
  },
  {
    label: 'Databases',
    summary: 'Relational, document, cache, and vector stores used across transaction-heavy and AI systems.',
    skills: [
      { name: 'Oracle', level: 84 },
      { name: 'PostgreSQL', level: 83 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 78 },
      { name: 'Redis', level: 76 },
      { name: 'ChromaDB', level: 80 },
      { name: 'Query Optimization', level: 84 },
      { name: 'Schema Design', level: 82 },
      { name: 'Indexing Strategy', level: 81 },
      { name: 'Data Modeling', level: 80 },
    ],
  },
  {
    label: 'Observability & Tools',
    summary: 'Monitoring, logs, search, and developer tooling for keeping production work visible and maintainable.',
    skills: [
      { name: 'Datadog', level: 78 },
      { name: 'Splunk', level: 75 },
      { name: 'CloudWatch', level: 80 },
      { name: 'Elasticsearch', level: 74 },
      { name: 'Git', level: 92 },
      { name: 'Jenkins', level: 78 },
      { name: 'Postman', level: 86 },
      { name: 'Jira', level: 82 },
      { name: 'OpenTelemetry', level: 72 },
      { name: 'Maven / Gradle', level: 84 },
    ],
  },
]

function SkillBar({ name, level, visible, delay }: { name: string; level: number; visible: boolean; delay: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-sm font-medium" style={{ color: 'var(--c-subtle)' }}>{name}</span>
        <span className="font-mono text-sm font-bold tabular-nums" style={{ color: 'var(--c-accent)' }}>{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full" style={{ backgroundColor: 'var(--c-bar-bg)' }}>
        <div
          className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-[#6366f1] via-[#818cf8] to-[#67e8f9]"
          data-visible={visible}
          style={{ '--level': `${level}%`, transitionDelay: `${delay}ms` } as React.CSSProperties}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { ref, isVisible } = useIntersectionObserver()
  const activeGroup = skillGroups[activeIndex]

  return (
    <section id="skills" className="scroll-mt-16 py-12 px-6 md:px-16">
      <div className="mx-auto max-w-7xl">
        <h2
          ref={ref}
          data-visible={isVisible}
          className="scroll-reveal mb-4 font-mono text-3xl font-bold"
          style={{ color: 'var(--c-text)' }}
        >
          <Icon name="code" className="inline h-8 w-8 align-[-0.18em]" /> Technical Skills
        </h2>
        <p
          data-visible={isVisible}
          className="scroll-reveal mb-8 max-w-4xl text-sm md:text-base"
          style={{ color: 'var(--c-muted)', transitionDelay: '60ms' }}
        >
          The tools and platforms I use to build resilient services, AI workflows, and fast product experiences.
        </p>

        <div
          data-visible={isVisible}
          className="scroll-reveal grid min-w-0 max-w-full gap-4 overflow-hidden lg:grid-cols-[280px_1fr]"
          style={{ transitionDelay: '120ms' }}
        >
          <aside
            className="min-w-0 max-w-full overflow-hidden rounded-lg border p-3 sm:p-4 lg:self-start"
            style={{ backgroundColor: 'var(--c-surface)', borderColor: 'var(--c-border)', boxShadow: 'var(--c-card-shadow)' }}
            aria-label="Skill categories"
          >
            <div className="no-scrollbar flex w-full min-w-0 max-w-full gap-2 overflow-x-auto overscroll-x-contain lg:block lg:space-y-2 lg:overflow-visible">
              {skillGroups.map((group, index) => {
                const selected = activeIndex === index
                return (
                  <button
                    key={group.label}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="shrink-0 rounded-md border px-3 py-2.5 text-left text-xs font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_6px_14px_rgba(15,23,42,0.08)] transition-[background-color,border-color,color,box-shadow,transform] duration-200 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_12px_26px_rgba(99,102,241,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818cf8]/60 sm:px-4 sm:py-3 sm:text-sm lg:w-full lg:hover:translate-x-1"
                    style={{
                      backgroundColor: selected ? 'rgba(99,102,241,0.16)' : 'transparent',
                      borderColor: selected ? 'rgba(99,102,241,0.55)' : 'var(--c-border)',
                      color: selected ? 'var(--c-text)' : 'var(--c-muted)',
                    }}
                    aria-pressed={selected}
                  >
                    {group.label}
                  </button>
                )
              })}
            </div>
          </aside>

          <div className="min-w-0 max-w-full overflow-hidden rounded-lg border p-4 md:p-6" style={{ backgroundColor: 'var(--c-surface)', borderColor: 'var(--c-border)', boxShadow: 'var(--c-card-shadow)' }}>
            <div className="mb-5">
              <h3 className="font-mono text-xl md:text-2xl font-bold" style={{ color: 'var(--c-text)' }}>{activeGroup.label}</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed" style={{ color: 'var(--c-muted)' }}>
                {activeGroup.summary}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {activeGroup.skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  visible={isVisible}
                  delay={index * 90}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
