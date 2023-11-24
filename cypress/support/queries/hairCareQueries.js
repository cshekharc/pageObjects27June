Cypress.Commands.add("validateNoofProductsOnHairCarePage",()=>{
    cy.get("@productName").its('length').should('be.gt', 3)
})