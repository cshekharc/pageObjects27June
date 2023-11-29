/// <reference types="cypress"/>
describe("visiting the automation test store site", () => {
    let product
    before(()=>{
        cy.fixture('example').then((productData)=>{
            product=productData
        })
    })
    beforeEach(()=>{
        // cy.visitUrl()
        cy.loginWithCookie()
    })
    // it('validating number of products',() => {
    //     cy.clickHairCareTab()
    //     cy.aliseOfProductName()
    //     cy.validateNoofProductsOnHairCarePage()
    // })
    it("Logs of products on Makeup page", () => {
        cy.clickOnMakeupTab()
        cy.getMakeupProductName().each((ele, index, list) => {
            cy.log( ele.text())
        })
    })

    it(" Add to cart product from Makeup page", () => {
        //cy.login(Cypress.env("userName"),Cypress.env("password"))
        cy.clickOnMakeupTab()
        cy.validateproductonMakeup(product.productName)
        cy.clickonMakeupProduct(product.productName)
        cy.validateCheckoutPage()
    })

    // it(" Add to cart product from Book page", () => {
    //     cy.clickonBooksTab()
    //     cy.validatingProductsOnBooksPage()
    //     cy.validateOutofStockProductonBooksPage()
    // })
})