import { renderHook } from '@testing-library/react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

describe('useIntersectionObserver', () => {
  it('returns ref and isVisible false initially', () => {
    const { result } = renderHook(() => useIntersectionObserver())
    expect(result.current.isVisible).toBe(false)
    expect(result.current.ref.current).toBeNull()
  })
})
