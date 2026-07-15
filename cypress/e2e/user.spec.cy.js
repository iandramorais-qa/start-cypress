import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginpage.js'

const loginPage = new LoginPage()

describe('Orange HRM Tests', () => {
   
  const selectorsList = { 
    sectionTitleTopBar: ':nth-child(8) > .oxd-main-menu-item',
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    middleName: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericFiel: ".oxd-input--active",
    dataField: "[placeholder='yyyy-mm-dd']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    nationalityField: ".oxd-select-text-input"
  }
   
  it.only('User Infor Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click ()
    cy.url().should('include', '/pim/viewPersonalDetails')
    cy.get(selectorsList.usernameField, { timeout: 15000 }).type(userData.userSuccess.username)
    cy.get(selectorsList.middleName).should('be.visible').clear({force: true}).type('Novo MiddleName', {force: true})
    cy.get(selectorsList.lastNameField).should('be.visible').clear({force: true}).type('Novo Apelido', {force: true})
    cy.get(selectorsList.genericFiel).eq(6).should('be.visible').clear({force: true}).type('NicknameT', {force: true})
    cy.get(selectorsList.genericFiel).eq(3).should('be.visible').clear({force: true}).type('Employee', {force: true})
    cy.get(selectorsList.genericFiel).eq(4).should('be.visible').clear({force: true}).type('OtherIdTest', {force: true})
    cy.get(selectorsList.genericFiel).eq(5).should('be.visible').clear({force: true}).type('DriversLicenseTest', {force: true})
    cy.get(selectorsList.genericFiel).eq(6).should('be.visible').clear({force: true}).type('15072026', {force: true})
    cy.get(selectorsList.dateCloseButton).click()
    cy.contains('.oxd-input-group', 'Nationality').find('.oxd-select-text-input').click()
    cy.contains('.oxd-select-option', 'Brazil').click() 
    cy.contains('.oxd-input-group', 'Marital Status').find('.oxd-select-text-input').click()
    cy.contains('.oxd-select-option', 'Single').click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('.oxd-toast', { timeout: 15000 }).should('contain', 'Successfully Updated')
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