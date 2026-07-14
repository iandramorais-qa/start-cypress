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
    lastNameField: "[name='lastName']",
    genericFiel: ".oxd-input--active",
    dataField: "[placeholder='yyyy-mm-dd']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
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
    cy.get(selectorsList.genericFiel).eq(3).clear().type('NicknameT')
    cy.get(selectorsList.genericFiel).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericFiel).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericFiel).eq(6).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericFiel).eq(7).clear().type('2026-07-14')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericFiel).eq(8).clear().type('ssnNumberTest')
    cy.get(selectorsList.genericFiel).eq(9).clear().type('sinNumberTest')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast')
  })
it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
     cy.get(selectorsList.wrongCredentialAlert)
  })
}) 