'use client'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="contact" className="py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} data-visible={isVisible} className="scroll-reveal">
          <p className="font-mono text-[#6366f1] dark:text-[#818cf8] text-sm tracking-widest mb-4 opacity-70">
            vedant.chidgopkar · available
          </p>
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-[#1a1d2e] dark:text-white mb-2 leading-tight">
            Let&apos;s build<br />
            <span className="bg-gradient-to-r from-[#6366f1] via-[#818cf8] to-[#67e8f9] bg-clip-text text-transparent">
              something.
            </span>
          </h2>
          <p className="text-[#5a6280] dark:text-[#8892a4] mb-6">San Jose, CA · Open to opportunities</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://cal.com/vedant-chidgopkar"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-6 py-3 bg-[#6366f1] text-white font-bold hover:bg-[#818cf8] transition-colors text-center"
            >
              Schedule a Meeting →
            </a>
            <a
              href="mailto:chidgopkarvedant02@gmail.com"
              className="font-mono text-sm px-6 py-3 border border-[#d4d8f0] dark:border-[#1e2235] text-[#5a6280] dark:text-[#8892a4] hover:text-[#6366f1] dark:hover:text-[#818cf8] hover:border-[#6366f1]/40 dark:hover:border-[#818cf8]/40 transition-colors text-center"
            >
              chidgopkarvedant02@gmail.com
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://linkedin.com/in/vedant-chidgopkar"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-[#5a6280] dark:text-[#8892a4] hover:text-[#6366f1] dark:hover:text-[#818cf8] border border-[#d4d8f0] dark:border-[#1e2235] px-4 py-2 hover:border-[#6366f1]/40 dark:hover:border-[#818cf8]/40 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vedantvc"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-[#5a6280] dark:text-[#8892a4] hover:text-[#6366f1] dark:hover:text-[#818cf8] border border-[#d4d8f0] dark:border-[#1e2235] px-4 py-2 hover:border-[#6366f1]/40 dark:hover:border-[#818cf8]/40 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#d4d8f0] dark:border-[#1e2235]">
          <p className="font-mono text-xs text-[#5a6280] dark:text-[#8892a4]">
            © 2026 Vedant Chidgopkar · Built with Next.js + TypeScript
          </p>
        </div>
      </div>
    </section>
  )
}
