import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

describe('Home page', () => {
  it('renders a header', () => {
    render(<Page />)

    const header = screen.getByRole('banner')

    expect(header).toBeInTheDocument()
  })
  it('renders main content', () => {
    render(<Page />)

    const main = screen.getByRole('main')

    expect(main).toBeInTheDocument()
  })
  it('renders a footer', () => {
    render(<Page />)

    const footer = screen.getByRole('contentinfo')

    expect(footer).toBeInTheDocument()
  })
})