import { render, screen, fireEvent, waitFor } from '@testing-library/react'
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
    expect(screen.getAllByText('Academics').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
  })

  it('changes nav state after scrolling past hero', async () => {
    render(<Nav />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveAttribute('data-scrolled', 'false')

    Object.defineProperty(window, 'scrollY', { value: 700, writable: true })
    Object.defineProperty(window, 'innerHeight', { value: 1000, writable: true })
    fireEvent.scroll(window)

    await waitFor(() => expect(nav).toHaveAttribute('data-scrolled', 'true'))
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
