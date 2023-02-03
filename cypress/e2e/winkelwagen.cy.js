const { curryRight } = require("cypress/types/lodash");

const getIframeBody = () => {
  return cy.get("iframe[");
};

describe("Inloggen + winkelwagen tests", () => {
  it("Test Inloggen", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Sign Out").click();
    cy.contains("Aanmelden").click();
    cy.get(".form-control").first().click().type("tom@mail.com");
    cy.get(".form-control").last().click().type("Tomdetommer21!!!");
    cy.contains("Log in").click();
  });

  it("Winkelwagen Toevoegen", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Aanmelden").click();
    cy.get(".form-control").first().click().type("tom@mail.com");
    cy.get(".form-control").last().click().type("Tomdetommer21!!!");
    cy.contains("Log in").click();
    cy.contains("Voorstellingen").first().click();
    cy.contains("bestel ticket").click();
    cy.wait(5000);
    cy.contains("4").click();
    cy.contains("5").click();
    cy.contains("Afrekenen").click();
    cy.contains("Winkelwagen").click();
    cy.contains("Afrekenen").click();
  });

  it("Winkelwagen niet toegankelijk", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Sign Out").click();
    cy.contains("Winkelwagen").click();
    cy.contains("Gebruik een account om in te loggen.");
  });
});
