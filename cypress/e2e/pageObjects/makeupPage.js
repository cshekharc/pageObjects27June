class MakeupPage{

    selectProductsonMakeupPage(pName){
        cy.get(".fixed .prdocutname").each((ele) => {
            if (ele.text().includes(pName)) {
                cy.wrap(ele).click()
                cy.get('.cart').click()
            }
        })
    }

    validateMakeupTitle(){
        cy.get('.maintext').should('be.visible')
    }
}

export default MakeupPage