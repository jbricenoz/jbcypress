class HomePageModel {

    objects ={
        "pageTitle": "h1",
        "cardTitle":".card > h3",
        "input": "#input-demo"
    }

    setTextOnInputDemo(text){
        return cy.get(this.objects.input).type(text)
    }

    getCardHeaderText(){
        return cy.get(this.objects.cardTitle)
    }

    getPageTitle(){
        return cy.get(this.objects.pageTitle)
    }

}
module.exports = new HomePageModel();