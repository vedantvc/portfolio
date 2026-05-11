'use client'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="contact" className="py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-mono text-[#00ff88] text-sm tracking-widest mb-4">
            $ echo &quot;hello&quot;
          </p>
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Let&apos;s build<br />
            <span className="text-[#00ff88]">something.</span>
          </h2>
          <p className="text-[#8892a4] mb-10">San Jose, CA · Open to opportunities</p>
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="mailto:chidgopkarvedant02@gmail.com"
              className="font-mono text-lg text-[#00ff88] hover:underline break-all"
            >
              chidgopkarvedant02@gmail.com
            </a>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/vedant-chidgopkar"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-[#8892a4] hover:text-[#00ff88] border border-[#1e2235] px-4 py-2 hover:border-[#00ff88]/30 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/vedantvc"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-[#8892a4] hover:text-[#00ff88] border border-[#1e2235] px-4 py-2 hover:border-[#00ff88]/30 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-[#1e2235]">
          <p className="font-mono text-xs text-[#8892a4]">
            © 2026 Vedant Chidgopkar · Built with Next.js + TypeScript
          </p>
        </div>
      </div>
    </section>
  )
}
