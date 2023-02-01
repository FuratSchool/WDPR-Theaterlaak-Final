

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
  it('kijkt of de tekst "mijn geselecteerde stoelen:" wordt toegevoegd aan de pagina wanneer je een stoel aanklikt', () => {
    cy.visit('/stoelreservatie/1')
    cy.get('[data-cy="stoel20"]').click()
    cy.contains('Mijn geselecteerde stoelen:')
  })
})




// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// describe('My First Test', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// describe('The Home Page', () => {
//   it('laad succesvol', () =>{
//     cy.visit('/')
//   })
// })

// describe("My First Test", () => {

//   it('zoekt naar type in de body', () =>{

//     cy.visit('https://example.cypress.io')

//     cy.contains('type')
//   })
// })

// describe('tweede test', () =>{

//   it('klik op de link "type"', () => {

//     cy.visit('https://example.cypress.io')
//     cy.contains('type').click()

//     cy.url().should('include', '/commands/actions')
//   })
// })
