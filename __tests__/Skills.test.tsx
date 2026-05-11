import { render, screen } from '@testing-library/react'
import Skills from '@/components/Skills'

describe('Skills', () => {
  it('renders section heading', () => {
    render(<Skills />)
    expect(screen.getByText('skills')).toBeInTheDocument()
  })

  it('renders all 4 skill group labels', () => {
    render(<Skills />)
    expect(screen.getByText('Languages & Backend')).toBeInTheDocument()
    expect(screen.getByText('AI & ML')).toBeInTheDocument()
    expect(screen.getByText('Cloud & DevOps')).toBeInTheDocument()
    expect(screen.getByText('Databases')).toBeInTheDocument()
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
    expect(screen.getByText('92%')).toBeInTheDocument()
  })
})
