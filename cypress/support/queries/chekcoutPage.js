Cypress.Commands.add("validateCheckoutPage",()=>{
    cy.url().should('include', 'checkout')
})
// 

Cypress.Commands.add("validateproductonMakeup",(pName)=>{
    cy.get(".fixed .prdocutname").each((ele) => {
        if (ele.text().includes(pName)) {
            cy.wrap(ele).should('include.text', pName)
            //expect(ele).to.include(pName)
        }
    })
})