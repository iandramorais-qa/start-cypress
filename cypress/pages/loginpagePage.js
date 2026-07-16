class LoginPage {
    constructor() {
        this.selectors= {
            usernameField: "[name='username']",
            passwordField: '[name="password"]',
            loginButton: '.oxd-button',
            wrongCredentialAlert: '.oxd-alert'
        }
    }
    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectors.usernameField).type(username)
        cy.get(this.selectors.passwordField).type(password)
        cy.get(this.selectors.loginButton).click()
    }
}

export default LoginPage