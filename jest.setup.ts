// jest.setup.ts
import '@testing-library/jest-dom'

global.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  constructor(_cb: IntersectionObserverCallback, _opts?: IntersectionObserverInit) {}
} as unknown as typeof IntersectionObserver
