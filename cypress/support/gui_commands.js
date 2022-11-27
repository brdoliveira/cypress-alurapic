Cypress.Commands.add("login", (nome, senha) => {
  cy.get('input[formcontrolname="userName"]').type(nome);
  cy.get('input[formcontrolname="password"]').type(senha, { log: false });
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("register", (email, fullname, username, senha) => {
  cy.contains("a", "Register now").click();
  cy.get('input[formcontrolname="email"]').type(email);
  cy.get('input[formcontrolname="fullName"]').type(fullname);
  cy.get('input[formcontrolname="userName"]').type(username);
  cy.contains("small", "User available").should("be.visible");
  cy.get('input[formcontrolname="password"]').type(senha);
  cy.contains("button", "Register").click();
});
