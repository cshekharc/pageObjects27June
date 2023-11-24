Cypress.Commands.add("clickonMakeupProduct",(pName)=>{
    cy.get(".fixed .prdocutname").each((ele) => {
        if (ele.text().includes(pName)) {
            cy.wrap(ele).click()
            cy.get('.cart').click()
        }
    })
})

Cypress.Commands.add("clickOnMakeupTab",() => {
    cy.getMakeupTab().click({ force: true })
})
