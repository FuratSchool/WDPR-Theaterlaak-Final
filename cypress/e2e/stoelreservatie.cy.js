

/// <reference types="Cypress" />


describe('weergeeft de juiste pagina van een voorstelling', () => {
  it('Test of de link parameter de juiste voorstelling weergeeft', () =>{
    cy.visit('/stoelreservatie/1')
    cy.contains('Les Miserables')
    cy.visit('/stoelreservatie/2')
    cy.contains('Matilda the Musical')
  })
})

describe('Weergave van mijn geselecteerde stoelen', ()=>{
  it('kijkt of de tekst "mijn geselecteerde stoelen:" wordt weergeven aan de pagina wanneer je een stoel aanklikt', () => {
    cy.visit('/stoelreservatie/1')
    cy.get('[data-cy="stoel20"]').click()
    cy.get('[data-cy="cyTekstSelectedStoelen"]').should('be.visible')

  })
})

