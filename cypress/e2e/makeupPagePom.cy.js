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
        // cy.loginWithCookie()
    })
    it('to validate the homepage',()=>{
        home.validatingTitle()
        home.validateNoofProucts()
    })

    it('to validate the makeup page and adding it to cart',()=>{
        makeup.validateMakeupTitle()
        makeup.selectProductsonMakeupPage('Tropiques Minerale Loose Bronzer')
        checkout.validateCheckoutPage()
    })
})