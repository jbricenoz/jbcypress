class StackOverflow {

    objects = {
        btnLogin: () => cy.get('//a[contains(text(),\'Log in\')]'),
        lblErrorMessage: () => cy.get('#login-form > .has-error > .s-input-message'),
        txtEmail: () => cy.get('#email'),
        txtPassword: () => cy.get('#password'),
        btnSubmit: () => cy.get('#submit-button')
    }

    clickOnLogin() {
        return this.objects.btnLogin().click()
    }

    setEmailOnInput(text) {
        this.objects.txtEmail().type(text)
    }

    setPasswordOnInput(text) {
        this.objects.txtPassword().type(text)
    }

    authenticate({ user, password }) {
        // this.clickOnLogin()
        this.setEmailOnInput(user)
        this.setPasswordOnInput(password)
    }

}
module.exports = new StackOverflow();