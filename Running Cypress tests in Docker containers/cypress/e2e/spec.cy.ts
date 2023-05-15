describe('Testing the homepage of the blog Testing with Cypress', () => {

  beforeEach(() => {
    cy.visit('http://medium.com/testing-with-cypress')
  });

  it('Verify header', () => {
    cy
      .get('h1')
      .should('be.visible')
      .and('contains.text', 'Testing with Cypress')
  })

  it('Verify slogan', () => {
    cy
      .get('h2')
      .should('be.visible')
      .and('contains.text', 'Test smarter, not harder with Cypress.')
  })

  it('Verify buttons set', () => {
    cy
      .get('.buttonSet li')
      .should('be.visible')
      .and('have.length', 3)
  })
})
