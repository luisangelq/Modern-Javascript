/// <reference types="Cypress" />

describe('Validate Form', () => {

    it("Fill fields in form", () => {
        cy.visit("/index.html")

        cy.get("[data-cy=pet-input]")
            .type("Pishi")
        cy.get("[data-cy=owner-input]")
            .type("Luis Angel")
        cy.get("[data-cy=phone-input]")
            .type("3326264356")
        cy.get("[data-cy=date-input]")
            .type("2020-05-05")
        cy.get("[data-cy=hour-input]")
            .type("10:00")
        cy.get("[data-cy=symptoms-input]")
            .type("Headache")
        
        //Press button
        cy.get("[data-cy=submit]")
            .click()

        cy.get("[data-cy=heading-dates]")
            .invoke("text")
            .should("eq", "Administra tus Citas")
    })
})