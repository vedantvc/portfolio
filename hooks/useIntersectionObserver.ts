import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const scrollingUp = useRef(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const updateScrollDirection = () => {
      const nextScrollY = window.scrollY
      scrollingUp.current = nextScrollY < lastScrollY.current
      lastScrollY.current = nextScrollY
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          return
        }

        if (scrollingUp.current && entry.boundingClientRect.top > window.innerHeight) {
          setIsVisible(false)
        }
      },
      { threshold: 0.1, ...options }
    )

    window.addEventListener('scroll', updateScrollDirection, { passive: true })
    if (ref.current) observer.observe(ref.current)
    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
      observer.disconnect()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { ref, isVisible }
}
