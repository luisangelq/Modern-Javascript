/// <reference types="cypress" />

describe('Load Main Page', () => {
    it("Load Main Page", () => {
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');

        cy.contains('[data-cy="project-title"]', "Administrador de Pacientes de Veterinaria")
        cy.get('[data-cy="project-title"]').should("exist");

        cy.get('[data-cy="project-title"]')
            .invoke('text')
            .should("eq", "Administrador de Pacientes de Veterinaria");

        cy.get('[data-cy="heading-dates"]')
            .invoke('text')
            .should("eq", "No hay Citas, comienza creando una");
    })
})