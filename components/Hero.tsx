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
      <div className="absolute inset-0 pointer-events-none scanlines opacity-5" />
      <div className="max-w-4xl relative z-10">
        <p className="font-mono text-[#00ff88] text-sm tracking-widest mb-4">$ whoami</p>
        <h1 className="font-mono text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-none">
          <span className="block">VEDANT</span>
          <span className="block">CHIDGOPKAR</span>
        </h1>
        <div className="font-mono text-xl md:text-2xl text-[#00ff88] mb-6 h-8 flex items-center">
          {displayed}<span className="animate-pulse ml-0.5">▊</span>
        </div>
        <p className="text-[#8892a4] text-lg max-w-2xl mb-10 leading-relaxed">
          4+ years building scalable systems across fintech and enterprise platforms —
          from distributed payment microservices to production AI agents.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="/resume.pdf"
            download
            className="font-mono text-sm px-5 py-2.5 bg-[#00ff88] text-[#0a0a0f] font-bold hover:bg-[#00cc6a] transition-colors"
          >
            Download Resume
          </a>
          <div className="flex gap-5">
            <a href="mailto:chidgopkarvedant02@gmail.com" className="font-mono text-sm text-[#8892a4] hover:text-[#00ff88] transition-colors">Email</a>
            <a href="https://linkedin.com/in/vedant-chidgopkar" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-[#8892a4] hover:text-[#00ff88] transition-colors">LinkedIn</a>
            <a href="https://github.com/vedantvc" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-[#8892a4] hover:text-[#00ff88] transition-colors">GitHub</a>
          </div>
        </div>
        <a href="#experience" className="mt-16 inline-block font-mono text-[#8892a4] text-sm animate-bounce hover:text-[#00ff88] transition-colors">↓ scroll</a>
      </div>
    </section>
  )
}
