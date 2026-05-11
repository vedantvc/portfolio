import { render, screen, fireEvent } from '@testing-library/react'
import Nav from '@/components/Nav'

describe('Nav', () => {
  it('renders logo', () => {
    render(<Nav />)
    expect(screen.getByText('VC')).toBeInTheDocument()
  })

  it('renders desktop nav links', () => {
    render(<Nav />)
    expect(screen.getAllByText('Experience').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Skills').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
  })

  it('toggles mobile menu on hamburger click', () => {
    render(<Nav />)
    const button = screen.getByRole('button', { name: /toggle menu/i })
    expect(button.textContent).toBe('☰')
    fireEvent.click(button)
    expect(button.textContent).toBe('✕')
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<Nav />)
    const button = screen.getByRole('button', { name: /toggle menu/i })
    fireEvent.click(button)
    const mobileLinks = screen.getAllByText('Experience')
    fireEvent.click(mobileLinks[mobileLinks.length - 1])
    expect(button.textContent).toBe('☰')
  })
})
