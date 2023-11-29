/// <reference types="cypress"/>
import HomePage from "./pageObjects/homePage"
import MakeupPage from "./pageObjects/makeupPage"
import CheckoutPage from "./pageObjects/checkOutPage"

const home = new HomePage()
const makeup = new MakeupPage()
const checkout = new CheckoutPage()


describe("Test cases with pom execution",()=>{
    beforeEach(()=>{
        cy.visitUrl()
        cy.viewport('iphone-6', 'landscape')
        // cy.loginWithCookie()
    })
    it('to validate the homepage',()=>{
        // cy.viewport(500, 400)
        home.validatingTitle()
        home.validateNoofProucts()
        
        
    })

    it('to validate the makeup page and adding it to cart',()=>{
        cy.viewport('iphone-8')
        makeup.validateMakeupTitle()
        makeup.selectProductsonMakeupPage('Tropiques Minerale Loose Bronzer')
        checkout.validateCheckoutPage()
        
    })
})