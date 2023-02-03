describe('Foutieve Login Gegevens', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[data-cy="LoginEmail"]').type('NietbestaandAccount@gmai.com')
    cy.get('[data-cy="LoginWW"]').type('NietbestaandWW')
    cy.get('[data-cy="cySubmitForm"]').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Foute Email of Wachtwoord');
    })
  })
})

describe('Correcte Login Gegevens', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[data-cy="LoginEmail"]').type('Bomanimutd@hotmail.com')
    cy.get('[data-cy="LoginWW"]').type('Testing1234!')
    cy.get('[data-cy="cySubmitForm"]').click()
    cy.url().should('include', '/userhome');
  })
})
