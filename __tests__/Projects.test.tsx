import { render, screen, fireEvent } from '@testing-library/react'
import Projects from '@/components/Projects'

describe('Projects', () => {
  it('renders section heading', () => {
    render(<Projects />)
    expect(screen.getByText(/Featured Projects/)).toBeInTheDocument()
  })

  it('renders all project names', () => {
    render(<Projects />)
    expect(screen.getByText('AI Support Agent')).toBeInTheDocument()
    expect(screen.getByText('RAG Retrieval Pipeline')).toBeInTheDocument()
    expect(screen.getByText('Edge LLM Deployment')).toBeInTheDocument()
    expect(screen.getByText('ML Fraud Detection')).toBeInTheDocument()
    expect(screen.getByText('Repayment Microservices')).toBeInTheDocument()
    expect(screen.getByText('Customer Portal')).toBeInTheDocument()
  })

  it('renders filter buttons', () => {
    render(<Projects />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'AI/ML' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Fintech' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Full-Stack' })).toBeInTheDocument()
  })

  it('filters projects by category', () => {
    render(<Projects />)
    fireEvent.click(screen.getByRole('button', { name: 'AI/ML' }))
    expect(screen.getByText('AI Support Agent')).toBeInTheDocument()
    expect(screen.queryByText('Repayment Microservices')).not.toBeInTheDocument()
  })
})
