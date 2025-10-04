import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'
import { expect } from '@jest/globals'

describe('Home page', () => {
  it('renders a header', () => {
    // [Arrange] On home page,
    const page = <Page />
    
    // [Act] when it's rendered,
    render(page)
    
    // [Assert] header should be present and visible
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
    expect(header).toBeVisible()
  })

  it('renders main content', () => {
    // [Arrange] On home page,
    const page = <Page />
    
    // [Act] when it's rendered,
    render(page)
    
    // [Assert] main content should be present and visible
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(main).toBeVisible()
  })

  it('renders a footer', () => {
    // [Arrange] On home page,
    const page = <Page />
    
    // [Act] when it's rendered,
    render(page)
    
    // [Assert] footer should be present and visible
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(footer).toBeVisible()
  })
})