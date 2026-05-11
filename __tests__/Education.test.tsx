import { render, screen } from '@testing-library/react'
import Education from '@/components/Education'

describe('Education', () => {
  it('renders section heading', () => {
    render(<Education />)
    expect(screen.getByText(/Academics/)).toBeInTheDocument()
    expect(screen.getByText(/Knowledge that compounds/)).toBeInTheDocument()
  })

  it('renders MS degree', () => {
    render(<Education />)
    expect(screen.getByText('M.S. Computer Science')).toBeInTheDocument()
    expect(screen.getByText('University of New Haven')).toBeInTheDocument()
  })

  it('renders BE degree', () => {
    render(<Education />)
    expect(screen.getByText('B.E. Computer Engineering')).toBeInTheDocument()
    expect(screen.getByText('Savitribai Phule Pune University')).toBeInTheDocument()
  })

  it('renders school website links', () => {
    render(<Education />)
    expect(screen.getByText('University of New Haven').closest('a')).toHaveAttribute('href', 'https://www.newhaven.edu/index.php')
    expect(screen.getByText('Savitribai Phule Pune University').closest('a')).toHaveAttribute('href', 'https://www.unipune.ac.in/')
  })

  it('renders degree periods', () => {
    render(<Education />)
    expect(screen.getByText('Aug 2021 - May 2023')).toBeInTheDocument()
    expect(screen.getByText('Aug 2016 - May 2020')).toBeInTheDocument()
  })

  it('renders locations', () => {
    render(<Education />)
    expect(screen.getByText('West Haven, CT')).toBeInTheDocument()
    expect(screen.getByText('Pune, India')).toBeInTheDocument()
  })
})
