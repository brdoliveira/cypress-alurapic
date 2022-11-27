describe("Login e registro de usuarios alura pic", () => {
    beforeEach(() => {
      cy.visit("http://alura-fotos.herokuapp.com");
    //   cy.intercept('POST','http://apialurapic.herokuapp.com/user/login',{
    //     statusCode: 200
    //   }).as('stubPost')
    });

    it("fazer login de usuario valido", () => {
        cy.login(Cypress.env('userName'),Cypress.env('password'))
        // cy.wait('@stubPost')
        cy.contains("a", "(Logout)").should("be.visible");
      });
    
      // it.only => roda apenas esse teste
      it("fazer login de usuario invalido", () => {
        cy.login('bruno','teste123')
        cy.on('window:alert',(str) => {
            expect(str).to.equal('Invalid user name or password')
        })
      });
    
})