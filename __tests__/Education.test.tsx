import { render, screen } from '@testing-library/react'
import Education from '@/components/Education'

describe('Education', () => {
  it('renders section heading', () => {
    render(<Education />)
    expect(screen.getByText('education')).toBeInTheDocument()
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

  it('renders degree periods', () => {
    render(<Education />)
    expect(screen.getByText('Aug 2021 – May 2023')).toBeInTheDocument()
    expect(screen.getByText('Aug 2016 – May 2020')).toBeInTheDocument()
  })

  it('renders locations', () => {
    render(<Education />)
    expect(screen.getByText('West Haven, CT')).toBeInTheDocument()
    expect(screen.getByText('Pune, India')).toBeInTheDocument()
  })
})
