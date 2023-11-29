class HomePage{
    validatingTitle(){
        cy.get('[title="Automation Test Store"]').should('be.visible')
    }

    clickOnHairCareTab(){
        cy.get('a[href*="https://automationteststore.com/index.php?rt=product/category&path"]')
            .contains("Hair Care")
            .click()
    }

    validateNoofProucts(){
        cy.get('.prdocutname').should('have.length', 16)
    }
}

export default HomePage