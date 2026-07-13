import userData from '../fixtures/user-data.json'
describe('Orange HRM Tests', () => {
  const selectorsList = { 
    usernameField: "[name='username']",
    passwordField: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: ':nth-child(8) > .oxd-main-menu-item',
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: '.oxd-alert',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleName: "[name='middleName']",
    lastNameField: "[name='lastName']"

  }
   
  it.only('User Infor Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click ()
    cy.url().should('include', '/pim/viewPersonalDetails')
    cy.get(selectorsList.firstNameField).clear().type('Novo Nome')
    cy.get(selectorsList.middleName).clear().type('Novo MiddleName')
    cy.get(selectorsList.lastNameField).clear().type('Novo Apelido')
  })
it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
     cy.get(selectorsList.wrongCredentialAlert)
  })
}) 