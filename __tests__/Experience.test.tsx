import { render, screen } from '@testing-library/react'
import Experience from '@/components/Experience'

describe('Experience', () => {
  it('renders section heading', () => {
    render(<Experience />)
    expect(screen.getByText(/Experience/)).toBeInTheDocument()
  })

  it('renders all four companies', () => {
    render(<Experience />)
    expect(screen.getByText('PayPal')).toBeInTheDocument()
    expect(screen.getByText('Oxmaint')).toBeInTheDocument()
    expect(screen.getByText('Berkshire Hathaway')).toBeInTheDocument()
    expect(screen.getByText('Logicon Technosolutions')).toBeInTheDocument()
  })

  it('renders company website links', () => {
    render(<Experience />)
    expect(screen.getByText('PayPal').closest('a')).toHaveAttribute('href', 'https://www.paypal.com')
    expect(screen.getByText('Oxmaint').closest('a')).toHaveAttribute('href', 'https://oxmaint.com')
    expect(screen.getByText('Logicon Technosolutions').closest('a')).toHaveAttribute('href', 'https://www.logicontech.com/')
  })

  it('renders role titles', () => {
    render(<Experience />)
    expect(screen.getByText('Software Engineer II')).toBeInTheDocument()
    expect(screen.getByText('AI Engineer')).toBeInTheDocument()
  })

  it('renders date ranges', () => {
    render(<Experience />)
    expect(screen.getByText('Apr 2025 - Present')).toBeInTheDocument()
    expect(screen.getByText('Jul 2024 - Apr 2025')).toBeInTheDocument()
  })

  it('renders tech tags for PayPal role', () => {
    render(<Experience />)
    expect(screen.getAllByText('Spring Boot').length).toBeGreaterThan(0)
    expect(screen.getByText('Oracle')).toBeInTheDocument()
    expect(screen.getByText('Kafka')).toBeInTheDocument()
  })

  it('renders tech tags for Oxmaint role', () => {
    render(<Experience />)
    expect(screen.getByText('LangChain')).toBeInTheDocument()
    expect(screen.getByText('RAG')).toBeInTheDocument()
  })
})
