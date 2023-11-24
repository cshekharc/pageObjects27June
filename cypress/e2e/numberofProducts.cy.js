/// <reference types="cypress"/>
describe("visiting the automation test store site",() => {
    it('validating number of products',() => {
        cy.visitUrl()
        cy.clickHairCareTab()
        cy.aliseOfProductName()
        cy.validateNoofProductsOnHairCarePage()
    })
})