import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginpagePage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
      
  it.only('User Infor Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()
    cy.url().should('include', '/pim/viewPersonalDetails')
    
    myInfoPage.fillPersonalDetails('Fisrt Name','Midlle Name', 'Last Name')
    myInfoPage.fillEmployeeDetails( 'EmployId', 'OtherId', 'Driver Number','15072026')
    myInfoPage.fillStatus()
    myInfoPage.saveFrom()

    
     
    
    
   
  })
it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
}) 