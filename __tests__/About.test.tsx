import { render, screen } from '@testing-library/react'
import About from '@/components/About'

describe('About', () => {
  it('renders heading', () => {
    render(<About />)
    expect(screen.getByText('about')).toBeInTheDocument()
  })

  it('renders the three pillars', () => {
    render(<About />)
    expect(screen.getByText('Distributed Systems')).toBeInTheDocument()
    expect(screen.getByText('AI Engineering')).toBeInTheDocument()
    expect(screen.getByText('Full-Stack Web')).toBeInTheDocument()
  })

  it('renders summary text', () => {
    render(<About />)
    expect(screen.getByText(/fintech/i)).toBeInTheDocument()
  })
})
