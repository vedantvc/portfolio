'use client'

// Deterministic star paths - every streak starts and ends outside the viewport.
const STARS = [
  { startX: '112vw', startY: '-12vh', endX: '-26vw', endY: '68vh', dur: '10s', delay: '0s', len: 86 },
  { startX: '126vw', startY: '6vh', endX: '-18vw', endY: '88vh', dur: '12s', delay: '3.8s', len: 72 },
  { startX: '108vw', startY: '28vh', endX: '-30vw', endY: '104vh', dur: '11s', delay: '7.5s', len: 80 },
  { startX: '118vw', startY: '-4vh', endX: '-20vw', endY: '76vh', dur: '13s', delay: '11.2s', len: 68 },
  { startX: '132vw', startY: '44vh', endX: '-24vw', endY: '118vh', dur: '12.5s', delay: '15s', len: 76 },
  { startX: '122vw', startY: '16vh', endX: '-28vw', endY: '96vh', dur: '14s', delay: '19s', len: 84 },
]

export default function Background() {
  return (
    <div className="bg-layer fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">

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

      {/* Soft shooting stars */}
      {STARS.map((star, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{
            '--start-x': star.startX,
            '--start-y': star.startY,
            '--end-x': star.endX,
            '--end-y': star.endY,
            '--dur': star.dur,
            '--delay': star.delay,
            '--len': `${star.len}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
