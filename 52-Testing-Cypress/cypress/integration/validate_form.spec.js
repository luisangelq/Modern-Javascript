/// <reference types="Cypress" />

describe('Validate Form', () => {
    it("Submit form and shoow error alert", () => {
        cy.visit("/index.html")

        cy.get("[data-cy=form]")
            .submit();

        cy.get("[data-cy=alertaForm]")
            .invoke("text")
            .should("eq", "Todos los campos son Obligatorios");

        cy.get("[data-cy=alertaForm]")
            .should("have.class","alert-danger");
    })
})