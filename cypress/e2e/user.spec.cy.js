import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginpagePage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
import MenuPage from '../pages/menuPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
      
  it('User Infor Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()
    cy.url().should('include', '/pim/viewPersonalDetails')
    
    myInfoPage.fillPersonalDetails(chance.first(),chance.name(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.word(), chance.bb_pin(), chance.cpf(),chance.date({string: true, american: false}))
    myInfoPage.fillStatus()
    myInfoPage.saveFrom()
    
  
  })
}) 