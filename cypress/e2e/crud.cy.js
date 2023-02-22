/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit(" http://127.0.0.1:5173/");
  });

  it("Agregar nuevo elemento en la task list", () => {
    cy.wait(5000)

    cy.get("input[name=name]").type("Hello, World");
    cy.get("input[name=description]").type("Hello, World");
    cy.get('[type="checkbox"]').first().check();
    cy.get('[type="submit"]').click();

    expect(cy.get("ul li p").should("have.length", 3));
  });
});