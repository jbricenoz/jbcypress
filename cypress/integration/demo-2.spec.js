/// <reference types="cypress" />
import Home from "../pages/home/home.page.model1";

describe('Example of POM', () => {

    const home = new Home()

    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl)
    })

    it('App displays card title Documentation #1', () => {
        home.getDocumentCardTitle().should('have.text', 'Documentation →')
    })

    it('App displays card title Documentation #2', () => {
        home.getDocumentCardTitle2().should('have.text', 'Documentation →')
    })

    it('App displays page title', () => {
        home.getPageTitle().should('have.text', 'Next.js + Cypress')
    })

    it('App send keys to input', () => {
        home.setTextOnInputDemo('HOLA')
    })

    afterEach(() => {
        cy.log('After all!')
    })

})