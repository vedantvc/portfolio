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

      if (scrollingUp.current && nextScrollY < window.innerHeight * 0.25) {
        setIsVisible(false)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          return
        }

        const nearTop = window.scrollY < window.innerHeight * 0.25

        if (scrollingUp.current && nearTop && entry.boundingClientRect.top > window.innerHeight) {
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
