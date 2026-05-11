import { render, screen } from '@testing-library/react'
import About from '@/components/About'

describe('About', () => {
  it('renders heading', () => {
    render(<About />)
    expect(screen.getByText(/About Me/)).toBeInTheDocument()
  })

  it('renders summary text', () => {
    render(<About />)
    expect(screen.getByText(/Based in San Jose/i)).toBeInTheDocument()
    expect(screen.getByText(/Master's in Computer Science/i)).toBeInTheDocument()
    expect(screen.getByText(/practical engineering/i)).toBeInTheDocument()
  })

  it('renders stats cards', () => {
    render(<About />)
    expect(screen.getByText('4+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Projects Delivered')).toBeInTheDocument()
  })
})
