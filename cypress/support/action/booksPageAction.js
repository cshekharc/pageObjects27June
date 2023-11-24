Cypress.Commands.add("clickonBooksTab",()=>{
    cy.getBookTab().click({ force: true })
})