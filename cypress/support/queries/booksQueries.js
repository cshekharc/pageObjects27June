Cypress.Commands.add("validatingProductsOnBooksPage",()=>{
    cy.get('[class="col-md-3 col-sm-6 col-xs-12"]').should('have.length', 4)
})

Cypress.Commands.add("validateOutofStockProductonBooksPage",()=>{
    cy.get('[class="col-md-3 col-sm-6 col-xs-12"]')
            .find('.pricetag.jumbotron')
            .children('.nostock')
            .should('have.length', 2)
})