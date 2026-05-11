import { render, screen } from '@testing-library/react'
import Contact from '@/components/Contact'

describe('Contact', () => {
  it('renders heading', () => {
    render(<Contact />)
    expect(screen.getByText('something.')).toBeInTheDocument()
  })

  it('renders email as mailto link', () => {
    render(<Contact />)
    const link = screen.getByText('chidgopkarvedant02@gmail.com')
    expect(link).toHaveAttribute('href', 'mailto:chidgopkarvedant02@gmail.com')
  })

  it('renders LinkedIn link', () => {
    render(<Contact />)
    expect(screen.getByText('LinkedIn')).toHaveAttribute('href', 'https://linkedin.com/in/vedant-chidgopkar')
  })

  it('renders GitHub link', () => {
    render(<Contact />)
    expect(screen.getByText('GitHub')).toHaveAttribute('href', 'https://github.com/vedantvc')
  })

  it('renders location and status', () => {
    render(<Contact />)
    expect(screen.getByText(/San Jose, CA/)).toBeInTheDocument()
  })
})
