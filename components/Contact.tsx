'use client'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="contact" className="py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          data-visible={isVisible}
          className="scroll-reveal"
        >
          <p className="font-mono text-[#818cf8] text-sm tracking-widest mb-4 opacity-70">
            vedant.chidgopkar · available
          </p>
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Let&apos;s build<br />
            <span className="bg-gradient-to-r from-[#818cf8] to-[#67e8f9] bg-clip-text text-transparent">
              something.
            </span>
          </h2>
          <p className="text-[#8892a4] mb-10">San Jose, CA · Open to opportunities</p>
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="mailto:chidgopkarvedant02@gmail.com"
              className="font-mono text-lg text-[#818cf8] hover:text-[#a5b4fc] hover:underline break-all transition-colors"
            >
              chidgopkarvedant02@gmail.com
            </a>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/vedant-chidgopkar"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-[#8892a4] hover:text-[#818cf8] border border-[#1e2235] px-4 py-2 hover:border-[#818cf8]/40 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/vedantvc"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-[#8892a4] hover:text-[#818cf8] border border-[#1e2235] px-4 py-2 hover:border-[#818cf8]/40 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#1e2235]">
          <p className="font-mono text-xs text-[#8892a4]">
            © 2026 Vedant Chidgopkar · Built with Next.js + TypeScript
          </p>
        </div>
      </div>
    </section>
  )
}
