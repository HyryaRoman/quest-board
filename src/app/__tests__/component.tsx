import React from 'react'
import Page from '../page'

describe('<Home />', () => {
  it('renders header', () => {
    // [Arrange] On home page,
    const home = <Page />

    // [Act] when it renders,
    cy.mount(home)

    // [Assert] the header is visible
    cy.get('header').should('be.visible')
  })

  it('renders main content', () => {
    // [Arrange] On home page,
    const home = <Page />

    // [Act] when it renders,
    cy.mount(home)

    // [Assert] the main content is visible
    cy.get('main').should('be.visible')
  })

  it('renders footer', () => {
    // [Arrange] On home page,
    const home = <Page />

    // [Act] when it renders,
    cy.mount(home)

    // [Assert] the footer is visible
    cy.get('footer').should('be.visible')
  })
})