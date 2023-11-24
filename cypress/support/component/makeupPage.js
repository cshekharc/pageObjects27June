
Cypress.Commands.add("getMakeupTab",()=>{
    cy.get('a[href*="https://automationteststore.com/index.php?rt=product/category&path"]')
    .contains("Makeup")
})

Cypress.Commands.add("getMakeupProductName",()=>{
    cy.get(".fixed_wrapper .prdocutname")
})
