class MenuPage {
    
    constructor() {
        this.selectorsList = {
           sectionTitleTopBar: ':nth-child(8) > .oxd-main-menu-item',
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        }
    }
         accessMyInfo() {
           cy.get(this.selectorsList.myInfoButton).click ()
         }

         accessorPerformace() {

         }
   
}

export default MenuPage