import { render, screen } from '@testing-library/react'
import Contact from '@/components/Contact'

describe('Contact', () => {
  it('renders heading', () => {
    render(<Contact />)
    expect(screen.getByText(/Let's build what lasts/i)).toBeInTheDocument()
  })

  it('renders email as mailto link', () => {
    render(<Contact />)
    const link = screen.getByText('chidgopkarvedant02@gmail.com').closest('a')
    expect(link).toHaveAttribute('href', 'mailto:chidgopkarvedant02@gmail.com')
  })

  it('renders phone link', () => {
    render(<Contact />)
    expect(screen.getByText('+1 475 287 9053').closest('a')).toHaveAttribute('href', 'tel:+14752879053')
  })

  it('renders Calendly meeting link', () => {
    render(<Contact />)
    expect(screen.getByText('Schedule a Meeting').closest('a')).toHaveAttribute('href', 'https://calendly.com/vedant-chidgopkar/30min')
  })

  it('renders LinkedIn link', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://linkedin.com/in/vedant-chidgopkar')
  })

  it('renders GitHub link', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/vedantvc')
  })

  it('renders location and status', () => {
    render(<Contact />)
    expect(screen.getAllByText(/San Jose, CA/).length).toBeGreaterThan(0)
    expect(screen.getByText(/open to engineering opportunities/i)).toBeInTheDocument()
  })
})
