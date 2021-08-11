/// <reference types="cypress" />

describe('Example of Baseurl', () => {
    
    beforeEach(() => {
      cy.visit(Cypress.config().baseUrl)
    })
  
    it('App displays card title Documentation', () => {
        cy.get('.card').eq(0).find('h3').should('have.text', 'Documentation →');
    })
  
    afterEach(()=>{
        cy.log('After all!')
    })
   
  })