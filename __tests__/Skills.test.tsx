import { render, screen } from '@testing-library/react'
import Skills from '@/components/Skills'

describe('Skills', () => {
  it('renders section heading', () => {
    render(<Skills />)
    expect(screen.getByText('skills')).toBeInTheDocument()
  })

  it('renders all 6 skill group labels', () => {
    render(<Skills />)
    expect(screen.getByText('Languages')).toBeInTheDocument()
    expect(screen.getByText('Backend & Frameworks')).toBeInTheDocument()
    expect(screen.getByText('AI & ML')).toBeInTheDocument()
    expect(screen.getByText('Cloud & DevOps')).toBeInTheDocument()
    expect(screen.getByText('Databases')).toBeInTheDocument()
    expect(screen.getByText('Observability & Tools')).toBeInTheDocument()
  })

  it('renders key skills', () => {
    render(<Skills />)
    expect(screen.getByText('Java')).toBeInTheDocument()
    expect(screen.getByText('Spring Boot')).toBeInTheDocument()
    expect(screen.getByText('LangChain / LangGraph')).toBeInTheDocument()
    expect(screen.getByText('Kafka')).toBeInTheDocument()
  })

  it('renders skill percentages', () => {
    render(<Skills />)
    expect(screen.getByText('95%')).toBeInTheDocument()
    expect(screen.getAllByText('92%').length).toBeGreaterThan(0)
  })
})
