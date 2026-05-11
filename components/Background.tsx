'use client'

// Deterministic star data — no Math.random() to avoid hydration mismatch
const STARS = [
  { top: '8%',  left: '10%', dur: '3.5s', delay: '0s',   len: 100 },
  { top: '15%', left: '55%', dur: '4.2s', delay: '1.2s', len: 80  },
  { top: '5%',  left: '80%', dur: '3.8s', delay: '2.5s', len: 120 },
  { top: '25%', left: '30%', dur: '5.0s', delay: '0.7s', len: 90  },
  { top: '35%', left: '70%', dur: '3.2s', delay: '3.1s', len: 70  },
  { top: '50%', left: '5%',  dur: '4.6s', delay: '1.8s', len: 110 },
  { top: '60%', left: '45%', dur: '3.9s', delay: '4.0s', len: 85  },
  { top: '12%', left: '92%', dur: '4.4s', delay: '0.4s', len: 95  },
  { top: '70%', left: '20%', dur: '3.6s', delay: '2.2s', len: 75  },
  { top: '45%', left: '85%', dur: '5.2s', delay: '3.6s', len: 105 },
  { top: '80%', left: '60%', dur: '4.1s', delay: '1.0s', len: 88  },
  { top: '20%', left: '42%', dur: '3.3s', delay: '4.8s', len: 115 },
]

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">

      {/* Floating orbs */}
      <div className="absolute rounded-full blur-[140px]"
        style={{ width: 680, height: 680, top: '-15%', left: '-8%',
          background: 'radial-gradient(circle, rgba(79,70,229,0.26) 0%, transparent 65%)',
          animation: 'orb-drift-1 22s ease-in-out infinite' }} />
      <div className="absolute rounded-full blur-[130px]"
        style={{ width: 560, height: 560, bottom: '-12%', right: '-8%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.20) 0%, transparent 65%)',
          animation: 'orb-drift-2 28s ease-in-out infinite' }} />
      <div className="absolute rounded-full blur-[120px]"
        style={{ width: 420, height: 420, top: '40%', left: '35%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.16) 0%, transparent 65%)',
          animation: 'orb-drift-3 34s ease-in-out infinite' }} />

      {/* Shooting stars */}
      {STARS.map((s, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{
            top: s.top,
            left: s.left,
            '--dur': s.dur,
            '--delay': s.delay,
            '--len': `${s.len}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
