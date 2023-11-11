describe("Hospital Test", () => {
  it("Hos", () => {
    cy.request(`http://localhost:5000/api/v1/hospitals`).as("hospital");

    cy.visit('/')
    cy.get('a[href="/hospital').should('exist')
    cy.get('a[href="/hospital').click()

    var hos:string[] = []
    cy.wait(2000)
    cy.get("@hospital").should((response) => {
      expect(response.status).equal(200);
      expect(response.body.data).be.not.null;
      expect(response.body.data).to.have.length(response?.body.count);
      hos = response?.body.data
    }).then(()=>{
      console.log(hos)

      hos.forEach(hosItem=>{
        cy.contains(hosItem.name).should('be.visible')
      })
    })
  })
})