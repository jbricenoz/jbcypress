class HomePage {

    objects = {
        pageTitle: () => cy.get('h1'),
        header: () => cy.get('.card').eq(0).find('h3'),
        inputDemo: () => cy.get('#input-demo')
    }

    elements ={
        "cardTitle":".card > h3"
    }

    setTextOnInputDemo(text){
        this.objects.inputDemo().type(text)
    }

    getCardHeaderText2(){
        return this.objects.header()
    }

    getCardHeaderText(){
        return cy.get(this.elements.cardTitle)
    }

    getPageTitle(){
        return this.objects.pageTitle()
    }

}
module.exports = new HomePage();