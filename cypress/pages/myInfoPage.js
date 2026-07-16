class MyInfoPage {

    constructor() {
        this.selectorsList = {
            firstNameField: "[name='firstName']",
            middleName: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericFiel: ".oxd-input--active",
            dataField: "[placeholder='yyyy-mm-dd']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            nationalityField: ".oxd-select-text-input"
        }
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList.firstNameField).should('be.visible').clear({force: true}).type(firstName, {force: true})
        cy.get(this.selectorsList.middleName).should('be.visible').clear({force: true}).type(middleName, {force: true})
        cy.get(this.selectorsList.lastNameField).should('be.visible').clear({force: true}).type(lastName, {force: true})
    }

    fillEmployeeDetails(employee, otherId, driversLicenseNumber, expiryDate) {
        cy.get(this.selectorsList.genericFiel).eq(3).should('be.visible').clear({force: true}).type(employee, {force: true})
        cy.get(this.selectorsList.genericFiel).eq(4).should('be.visible').clear({force: true}).type(otherId, {force: true})
        cy.get(this.selectorsList.genericFiel).eq(5).should('be.visible').clear({force: true}).type(driversLicenseNumber, {force: true})
        cy.get(this.selectorsList.genericFiel).eq(6).should('be.visible').clear({force: true}).type(expiryDate, {force: true})
        cy.get(this.selectorsList.dateCloseButton).click()
    }

    saveFrom() {
        cy.get(this.selectorsList.submitButton).eq(0).click()
        cy.get('.oxd-toast', { timeout: 15000 }).should('contain', 'Successfully Updated')
    }

    fillStatus() {
        cy.contains('.oxd-input-group', 'Nationality').find('.oxd-select-text-input').click()
        cy.contains('.oxd-select-option', 'Brazil').click()
        cy.contains('.oxd-input-group', 'Marital Status').find('.oxd-select-text-input').click()
        cy.contains('.oxd-select-option', 'Single').click()
    }

}

export default MyInfoPage