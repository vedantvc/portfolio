'use client'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const degrees = [
  {
    degree: 'M.S. Computer Science',
    school: 'University of New Haven',
    location: 'West Haven, CT',
    period: 'Aug 2021 – May 2023',
    icon: '🎓',
  },
  {
    degree: 'B.E. Computer Engineering',
    school: 'Savitribai Phule Pune University',
    location: 'Pune, India',
    period: 'Aug 2016 – May 2020',
    icon: '🏛️',
  },
]

function DegreeCard({ deg, delay }: { deg: typeof degrees[0]; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      data-visible={isVisible}
      className="scroll-reveal bg-[#131720]/80 backdrop-blur-sm border border-[#1e2235] p-6 hover:border-[#6366f1]/40 hover:shadow-[0_0_28px_rgba(99,102,241,0.08)] hover:scale-[1.02] transition-[border-color,box-shadow,transform] duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-2xl mb-3">{deg.icon}</p>
          <h3 className="font-mono text-lg font-bold text-white mb-1">{deg.degree}</h3>
          <p className="font-mono text-sm text-[#818cf8]">{deg.school}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="font-mono text-xs text-[#8892a4]">{deg.period}</p>
          <p className="font-mono text-xs text-[#8892a4] mt-1">{deg.location}</p>
        </div>
      </div>
      {/* Decorative bottom accent */}
      <div className="mt-5 h-px bg-gradient-to-r from-[#6366f1]/40 via-[#818cf8]/20 to-transparent" />
    </div>
  )
}

export default function Education() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="education" className="py-24 px-6 md:px-16 bg-[#0d1117]/40">
      <div className="max-w-4xl mx-auto">
        <h2
          ref={ref}
          data-visible={isVisible}
          className="scroll-reveal font-mono text-3xl font-bold text-white mb-10"
        >
          <span className="text-[#818cf8]">./</span>education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {degrees.map((deg, i) => (
            <DegreeCard key={deg.school} deg={deg} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}
