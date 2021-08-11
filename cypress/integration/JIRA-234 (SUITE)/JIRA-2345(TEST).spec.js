
/// <reference types="cypress" />
import HomePageModel from '../../pages/home/home.page.model2';

describe('SUITE 234', () => {

    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl)
    })

    it('[JIRA2345] - App displays card title Documentation #1', () => {
        HomePageModel.getCardHeaderText().contains('Documentation →')
    })


    it('App displays page title #2', () => {
        HomePageModel.getPageTitle().should('have.text', 'Next.js + Cypress')
    })

    it('App send keys to input', () => {
        HomePageModel.setTextOnInputDemo('HOLA')
    })

    afterEach(() => {
        cy.log('After all!')
    })

})