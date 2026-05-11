import { fireEvent, render, screen } from '@testing-library/react'
import Skills from '@/components/Skills'

describe('Skills', () => {
  it('renders section heading', () => {
    render(<Skills />)
    expect(screen.getByText(/Engineering Toolkit/)).toBeInTheDocument()
  })

  it('renders all 6 skill group labels', () => {
    render(<Skills />)
    expect(screen.getAllByText('Languages').length).toBeGreaterThan(0)
    expect(screen.getByText('Backend & Frameworks')).toBeInTheDocument()
    expect(screen.getByText('AI & ML')).toBeInTheDocument()
    expect(screen.getByText('Cloud & DevOps')).toBeInTheDocument()
    expect(screen.getByText('Databases')).toBeInTheDocument()
    expect(screen.getByText('Observability & Tools')).toBeInTheDocument()
  })

  it('renders key skills', () => {
    render(<Skills />)
    expect(screen.getByText('Java')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Backend & Frameworks' }))
    expect(screen.getByText('Spring Boot')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'AI & ML' }))
    expect(screen.getByText('LangChain / LangGraph')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Cloud & DevOps' }))
    expect(screen.getByText('Kafka')).toBeInTheDocument()
  })

  it('renders skill percentages', () => {
    render(<Skills />)
    expect(screen.getByText('95%')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Backend & Frameworks' }))
    expect(screen.getByText('92%')).toBeInTheDocument()
  })
})
