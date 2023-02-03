  describe('haal bestaande rangen op en controleert of ze een id hebben', () => {
    it('geeft een lijst met rangen terug die bestaan', () => {
      cy.request('http://localhost:5044/api/Rang')
        .its('body')
        .should('be.an', 'array')
        .and('have.length.greaterThan', 0)
        .then((rangen) => {
          rangen.forEach((rang) => {
            expect(rang).to.have.property('rangId');
          });
        });
    });
  });

  describe('Vraag een rang die niet bestaat', () => {
    it('Geeft errorcode 404 terug', () => {
      const nepId = 1231313;
      cy.request({
        method: 'GET',
        url: 'http://localhost:5044/api/Rang/' + nepId,
        failOnStatusCode: false,
      })
        .then((response) => {
          expect(response.status).to.equal(404);
        });
    });
  });
  
  