describe('template spec', () => {
  it('Hos', () => {
    cy.intercept({
      method:'GET',
      url: `http://localhost:5000/api/v1/hospitals`},req => {
        delete req.headers['if-none-match']
      }).as('test1')


    cy.visit('/hospital')
    cy.wait(10000)
    cy.wait('@test1').should(({request,response})=>{
      // expect(response?.statusCode).equal(200)
      // expect(response?.body.data).be.not.null
      // expect(response?.body.data).to.have.length(response?.body.count)
    }).then(console.log)
  })
})