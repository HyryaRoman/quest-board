import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

describe('Home page', () => {
  it('renders a header', () => {
    // [Arrange] On the rendered page,
    render(<Page />)

    // [Act] with no action required
    
    // [Assert] header should be present and visible
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
    expect(header).toBeVisible()
  })

  it('renders main content', () => {
    // [Arrange] On the rendered page,
    render(<Page />)

    // [Act] with no action required
    
    // [Assert] main content should be present and visible
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(main).toBeVisible()
  })

  it('renders a footer', () => {
    // [Arrange] On the rendered page,
    render(<Page />)

    // [Act] with no action required
    
    // [Assert] footer should be present and visible
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(footer).toBeVisible()
  })
})