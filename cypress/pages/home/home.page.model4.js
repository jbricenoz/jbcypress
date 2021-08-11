export const setTextOnInputDemo = (text) => {
    cy.get('#input-demo').type(text)

}

export const getCardHeaderText = (text) => {
    return cy.get('.card').eq(0).find('h3')
}

export const getPageTitle = (text) => {
    return cy.get('h1')
}



