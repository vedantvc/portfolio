import { render, screen } from '@testing-library/react'
import Skills from '@/components/Skills'

describe('Skills', () => {
  it('renders section heading', () => {
    render(<Skills />)
    expect(screen.getByText('skills')).toBeInTheDocument()
  })

  it('renders all 7 skill groups', () => {
    render(<Skills />)
    expect(screen.getByText('AI & ML Engineering')).toBeInTheDocument()
    expect(screen.getByText('Distributed Systems')).toBeInTheDocument()
    expect(screen.getByText('Java Backend Core')).toBeInTheDocument()
    expect(screen.getByText('Full-Stack Web')).toBeInTheDocument()
    expect(screen.getByText('Cloud & DevOps')).toBeInTheDocument()
    expect(screen.getByText('PayPal Fintech')).toBeInTheDocument()
    expect(screen.getByText('Observability')).toBeInTheDocument()
  })

  it('renders key AI skills', () => {
    render(<Skills />)
    expect(screen.getByText('LangChain')).toBeInTheDocument()
    expect(screen.getByText('LangGraph')).toBeInTheDocument()
    expect(screen.getByText('RAG Pipelines')).toBeInTheDocument()
  })

  it('renders key backend skills', () => {
    render(<Skills />)
    expect(screen.getByText('Java')).toBeInTheDocument()
    expect(screen.getByText('Spring Boot')).toBeInTheDocument()
    expect(screen.getByText('Kafka')).toBeInTheDocument()
  })
})
