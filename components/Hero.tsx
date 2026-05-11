'use client'
import { useEffect, useState } from 'react'

const titles = ['Software Engineer II', 'AI Engineer', 'Distributed Systems']

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = titles[titleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIndex((i) => (i + 1) % titles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIndex])

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-14 relative overflow-hidden">
      <div className="max-w-4xl relative z-10">

        {/* Label */}
        <p
          className="animate-fade-up font-mono text-[#818cf8] text-sm tracking-widest mb-4 opacity-70"
          style={{ animationDelay: '0ms' }}
        >
          vedant.chidgopkar
        </p>

        {/* Name */}
        <h1
          className="animate-fade-up font-mono text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-none"
          style={{ animationDelay: '120ms' }}
        >
          <span className="block">VEDANT</span>
          <span className="block bg-gradient-to-r from-[#818cf8] via-[#a5b4fc] to-[#67e8f9] bg-clip-text text-transparent">
            CHIDGOPKAR
          </span>
        </h1>

        {/* Typing subtitle */}
        <div
          className="animate-fade-up font-mono text-xl md:text-2xl text-[#818cf8] mb-6 h-8 flex items-center"
          style={{ animationDelay: '240ms' }}
        >
          {displayed}<span className="animate-pulse ml-0.5 text-[#a5b4fc]">▊</span>
        </div>

        {/* Description */}
        <p
          className="animate-fade-up text-[#8892a4] text-lg max-w-2xl mb-8 leading-relaxed"
          style={{ animationDelay: '360ms' }}
        >
          4+ years building scalable systems across fintech and enterprise platforms —
          from distributed payment microservices to production AI agents.
        </p>

        {/* Stats row */}
        <div
          className="animate-fade-up flex flex-wrap gap-6 mb-10"
          style={{ animationDelay: '440ms' }}
        >
          {[
            { value: '4+', label: 'Years Experience' },
            { value: '10M+', label: 'Daily Transactions' },
            { value: '4', label: 'Companies' },
            { value: '60%', label: 'RAG Accuracy Gain' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-mono text-2xl font-bold text-white">{value}</p>
              <p className="font-mono text-xs text-[#8892a4] mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="animate-fade-up flex flex-wrap gap-4 items-center"
          style={{ animationDelay: '520ms' }}
        >
          <a
            href="/resume.pdf"
            download
            className="font-mono text-sm px-5 py-2.5 bg-[#6366f1] text-white font-bold hover:bg-[#818cf8] transition-colors rounded-sm"
          >
            Download Resume
          </a>
          <div className="flex gap-5">
            <a href="mailto:chidgopkarvedant02@gmail.com" className="font-mono text-sm text-[#8892a4] hover:text-[#818cf8] transition-colors">Email</a>
            <a href="https://linkedin.com/in/vedant-chidgopkar" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-[#8892a4] hover:text-[#818cf8] transition-colors">LinkedIn</a>
            <a href="https://github.com/vedantvc" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-[#8892a4] hover:text-[#818cf8] transition-colors">GitHub</a>
          </div>
        </div>

        <a
          href="#experience"
          className="animate-fade-up mt-16 inline-block font-mono text-[#8892a4] text-sm animate-bounce hover:text-[#818cf8] transition-colors"
          style={{ animationDelay: '600ms' }}
        >
          ↓ scroll
        </a>
      </div>
    </section>
  )
}
