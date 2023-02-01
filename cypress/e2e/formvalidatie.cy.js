describe('niks ingevoerd in de invoervelden', () => {
  it('wordt rood en er wordt tekst weergegeven om alsnog een invoervelden in te vullen', () => {
    cy.visit('/register')
    cy.get('[data-cy="cySubmitForm"]').click()
  })
})

describe('Alles wordt correct ingevuld', () => {
  it('alles wordt groen', () => {
    cy.visit('/register')
    cy.get('[data-cy="cyVoornaam"]').type('Erik')
    cy.get('[data-cy="cyAchternaam"]').type('Ten Hag')
    cy.get('[data-cy="cyUserName"]').type('UserHag')
    cy.get('[data-cy="cyEmail"]').type('Tester@gmail.com')
    cy.get('[data-cy="cyPassword"]').type('Testing123!')
    cy.get('[data-cy="cyConfirmPassword"]').type('Testing123!')
    cy.get('[data-cy="cySubmitForm"]').click()
  })
})

describe('voornaam ingevoerd', () => {
  it('wordt groen', () => {
    cy.visit('/register')
    cy.get('[data-cy="cyVoornaam"]').type('Erik')
    cy.get('[data-cy="cySubmitForm"]').click()
  })
})


describe('achternaam ingevoerd', () => {
  it('wordt groen en je kan verder', () => {
    cy.visit('/register')
    cy.get('[data-cy="cyAchternaam"]').type('Ten Hag')
    cy.get('[data-cy="cySubmitForm"]').click()
  })
})


describe('username ingevoerd', () => {
  it('wordt groen en je kan verder', () => {
    cy.visit('/register')
    cy.get('[data-cy="cyUserName"]').type('mastercoacher')
    cy.get('[data-cy="cySubmitForm"]').click()
  })
})


describe('Email klopt niet', () => {
  it('wordt rood en er komt tekst te staan dat je email niet klopt', () => {
    cy.visit('/register')
    cy.get('[data-cy="cyEmail"]').type('kamdakdanjn@adadpa')
    cy.get('[data-cy="cySubmitForm"]').click()
  })
})

describe('Email klopt', () => {
  it('Wordt groen ter bevestiging', () => {
    cy.visit('/register')
    cy.get('[data-cy="cyEmail"]').type('kamdakdanjn@gmail.com')
    cy.get('[data-cy="cySubmitForm"]').click()
  })
})

describe('Voer ongeldig wachtwoord in', () => {
  it('border wordt rood en er komt tekst te staan dat je wachtwoord niet klopt', () => {
    cy.visit('/register')
    cy.get('[data-cy="cyPassword"]').type('T222')
    cy.get('[data-cy="cyConfirmPassword"]').type('T222')
    cy.get('[data-cy="cySubmitForm"]').click()
  })
})


describe('wachtwoorden komen niet overeen', () => {
  it('border wordt rood en er komt tekst te staan dat je wachtwoord niet overeenkomen', () => {
    cy.visit('/register')
    cy.get('[data-cy="cyPassword"]').type('Testing123!')
    cy.get('[data-cy="cyConfirmPassword"]').type('Testing123####')
    cy.get('[data-cy="cySubmitForm"]').click()
  })
})

describe('wachtwoorden komen overeen en voldoen aan voorwaarden', () => {
  it('wordt groen je kan verder', () => {
    cy.visit('/register')
    cy.get('[data-cy="cyPassword"]').type('Testing123!')
    cy.get('[data-cy="cyConfirmPassword"]').type('Testing123!')
    cy.get('[data-cy="cySubmitForm"]').click()
  })
})