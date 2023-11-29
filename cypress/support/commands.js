// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("visitUrl",()=>{
    cy.visit("/")
})

Cypress.Commands.add("loginWithCookie",()=>{
    cy.visit("/")
    //cy.login()
    //cy.getCookie()
    cy.setCookie('customer','RGVTYVg4UmdydUZLSkFza2Nza0ViZzFqc1ZLRlB4dDA4Wld2MWdRTFhNYyt3akFTUWhMcWswNEgxYTh2RVZuUEZzUUFoVXFxTFB6RU5Kb0ljYWh2RnM4OWRnOU9rSUdoaHgyK2ZkVzNBV2s4Z3ZLUmZBcjZVbDkvaDVMSGxSQXNzdzhXYlRqZE9DSFpBUkxhdm83eHNBPT06On58SlQKB8K_wicMflIzOck%3D')
    cy.reload()
    cy.get('.top.menu_account').should('include.text', 'Welcome back csc')
})