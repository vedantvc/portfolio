import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders full name', () => {
    render(<Hero />)
    expect(screen.getByText('VEDANT')).toBeInTheDocument()
    expect(screen.getByText('CHIDGOPKAR')).toBeInTheDocument()
  })

  it('renders download resume link', () => {
    render(<Hero />)
    const link = screen.getByText('Download Resume').closest('a')
    expect(link).toHaveAttribute('href', '/resume.pdf')
    expect(link).toHaveAttribute('download')
  })

  it('renders email link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute('href', 'mailto:chidgopkarvedant02@gmail.com')
  })

  it('renders LinkedIn link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://linkedin.com/in/vedant-chidgopkar')
  })

  it('renders GitHub link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/vedantvc')
  })

  it('renders scroll anchor', () => {
    render(<Hero />)
    const scrollLink = screen.getByText('↓ scroll').closest('a')
    expect(scrollLink).toHaveAttribute('href', '#about')
  })
})
