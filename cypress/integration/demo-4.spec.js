/// <reference types="cypress" />
import { 
    setTextOnInputDemo, 
    getCardHeaderText, 
    getPageTitle 
} from '../pages/home/home.page.model4';

describe('Example of POM', () => {

    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl)
    })

    it('App displays card title Documentation #1', () => {
        getCardHeaderText().contains('Documentation →')
    })

    it('App displays page title #2', () => {
        getPageTitle().should('have.text', 'Next.js + Cypress')
    })

    it('App send keys to input', () => {
        setTextOnInputDemo('HOLA')
    })

    afterEach(() => {
        cy.log('After all!')
    })

})