/// <reference types="Cypress" />

describe("Validate Form", () => {
  it("Submit form empty", () => {
    cy.visit("/index.html");

    cy.get("[data-cy=form]").submit();

    cy.get("[data-cy=alertaForm]")
      .invoke("text")
      .should("eq", "Todos los campos son Obligatorios");

    cy.get("[data-cy=alertaForm]").should("have.class", "alert-danger");
  });

  it("Create appoitnment", () => {

    cy.get("[data-cy=pet-input]").type("Pet Created");
    cy.get("[data-cy=owner-input]").type("Owner Created");
    cy.get("[data-cy=phone-input]").type("000000000");
    cy.get("[data-cy=date-input]").type("2021-08-24");
    cy.get("[data-cy=hour-input]").type("10:00");
    cy.get("[data-cy=symptoms-input]").type("Symptom created");

    //Press button
    cy.get("[data-cy=submit]").click();

    cy.get("[data-cy=heading-dates]")
      .invoke("text")
      .should("eq", "Administra tus Citas");
  });

  it("Edit Appointment", () => {
    cy.get("[data-cy=btn-edit]").click();

    cy.get("[data-cy=pet-input]").clear().type("Pet Edited");
    cy.get("[data-cy=owner-input]").clear().type("Owner Edited");
    cy.get("[data-cy=phone-input]").clear().type("111111111");
    cy.get("[data-cy=date-input]").clear().type("2021-08-24");
    cy.get("[data-cy=hour-input]").clear().type("10:00");
    cy.get("[data-cy=symptoms-input]").clear().type("Symptom Edited");

    //Press button
    cy.get("[data-cy=submit]").click();
  });

  it("Delete Appointment", () => {
    cy.get("[data-cy=btn-delete]").click();
  });
});
