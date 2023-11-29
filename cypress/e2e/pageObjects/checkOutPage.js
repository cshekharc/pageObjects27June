class CheckoutPage{
    validateCheckoutPage(){
        cy.url().should('include','checkout')
    }
}
export default CheckoutPage