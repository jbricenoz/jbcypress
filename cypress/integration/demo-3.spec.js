/// <reference types="cypress" />
import HomePage from '../pages/home/home.page.model3';

describe('Example of POM', () => {

    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl)
    })

    it('App displays card title Documentation #1', () => {
        HomePage.getCardHeaderText().contains('Documentation →')
    })

    it('App displays card title Documentation #2', () => {
        HomePage.getCardHeaderText2().should('have.text', 'Documentation →')
    })

    it('App displays card title Documentation #3', () => {
        HomePage.objects.header().should('have.text', 'Documentation →')
    })

    it('App displays page title', () => {
        HomePage.objects.pageTitle().should('have.text', 'Next.js + Cypress')
    })

    it('App displays page title #2', () => {
        HomePage.getPageTitle().should('have.text', 'Next.js + Cypress')
    })

    it('App send keys to input', () => {
        HomePage.setTextOnInputDemo('HOLA')
    })

    afterEach(() => {
        cy.log('After all!')
    })

})