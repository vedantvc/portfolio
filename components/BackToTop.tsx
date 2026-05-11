'use client'
import { useEffect, useState } from 'react'
import Icon from '@/components/Icon'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frameId: number | null = null

    const updateVisible = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }

    const requestVisible = () => {
      if (frameId !== null) return
      frameId = window.requestAnimationFrame(() => {
        frameId = null
        updateVisible()
      })
    }

    updateVisible()
    window.addEventListener('scroll', requestVisible, { passive: true })
    window.addEventListener('resize', requestVisible)

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestVisible)
      window.removeEventListener('resize', requestVisible)
    }
  }, [])

  return (
    <a
      href="#hero"
      aria-label="Back to top"
      className={`fixed bottom-6 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition-[opacity,transform,border-color,color] duration-300 hover:opacity-100 ${
        visible ? 'translate-y-0 opacity-50' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
      style={{ backgroundColor: 'var(--c-nav-bg)', borderColor: 'var(--c-border)', color: 'var(--c-muted)' }}
      onMouseEnter={e => { e.currentTarget.style.color = 'var(--c-accent)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)' }}
      onMouseLeave={e => { e.currentTarget.style.color = 'var(--c-muted)'; e.currentTarget.style.borderColor = 'var(--c-border)' }}
    >
      <Icon name="arrowUp" className="m-auto h-5 w-5 block" />
    </a>
  )
}
