describe('GET api/Stoel/:id', () => {
  it('returns a stoel with the specified id', () => {
    cy.request('GET', 'http://localhost:3000/api/Stoel/27')
      .then((response) => {
        if (typeof response.body === 'object') {
          expect(response.body).to.have.property('id', 27);
        } 
      });
  });
});


describe('Vraag een stoel die niet bestaat', () => {
  it.only('Geeft errorcode 404 terug', () => {
    const nepId = 67;
    cy.request({
      method: 'GET',
      url: 'http://localhost:5044/api/Stoel/' + nepId,
      failOnStatusCode: false,
    })
      .then((response) => {
        expect(response.status).to.equal(404);
      });
  });
});
