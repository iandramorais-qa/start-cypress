class DashboardPage {
    
    constructor() {
        this.selectorsList = {
           dashboardGrid: ".orangehrm-dashboard-grid",
        }
    }
    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList.dashboardGrid)
   
    }
   
}

export default DashboardPage
