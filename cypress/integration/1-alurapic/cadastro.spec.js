describe("Cadastro de usuarios alura pic", () => {
  beforeEach(() => {
    cy.visit("http://alura-fotos.herokuapp.com");
  });

  it("verifica mensagens validacao", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Email is required!").should("be.visible");
    cy.contains("ap-vmessage", "Full name is required!").should("be.visible");
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
  });

  it("verifica mensagem de email inválido", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Email is required!").should("be.visible");
    cy.get('input[formcontrolname="email"]').type("bruno");
    cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible");
  });

  it("verifica mensagens de senha com menos de 8 caracteres", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="password"]').type("123");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 8").should("be.visible");
  });

  it("verifica mensagens de que o nome do usuario não pode ser em upper case", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="userName"]').type("BRUNOO");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Must be lower case").should("be.visible");
  });

  const usuarios = require("../../fixtures/usuarios.json");
  it("fazer registro de novos usuarios", () => {
    usuarios.forEach((usuario) => {
      cy.register(
        usuario.email,
        usuario.fullName,
        usuario.userName,
        usuario.password
      );
    });
  });
});
