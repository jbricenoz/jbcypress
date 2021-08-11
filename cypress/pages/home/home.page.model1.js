class Home{

    objects = {
        pageTitle: () => cy.get('h1'),
        header: () => cy.get('.card').eq(0).find('h3'),
        inputDemo: () => cy.get('#input-demo')
    }

    getDocumentCardTitle(){
        return cy.get('.card').eq(0).find('h3')
    }

    #getDocumentCardTitlePrivateMethod(){
        return this.objects.header()
    }

    getDocumentCardTitle2(){
        return this.#getDocumentCardTitlePrivateMethod()
    }

    getPageTitle(){
        return this.objects.pageTitle()
    }

    setTextOnInputDemo(text){
        this.objects.inputDemo().type(text)
    }

}
export default Home