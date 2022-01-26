/// <reference types="cypress" />
import StackOverflow from "../pages/login.page.stackoverflow"
describe('Stackoverflow Suite', () => {

    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl + '/users/login')
        StackOverflow.authenticate({ user: "email@gmail.com", password: "password" })
    })

    it('Validate if error message', () => {
        StackOverflow.objects.lblErrorMessage.contains('The email or password is incorrect.')
    })

    afterEach(() => {
        cy.log('After all!')
    })

})