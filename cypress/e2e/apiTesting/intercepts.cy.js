/// <reference types = "Cypress"/>
//.flex .cursor-pointer
describe('use of intercept',()=>{
    it.skip('use intercept as wait',()=>{
        cy.intercept({
            path : "/data/v1/post/60d21af267d0d8992e610b8d/*"
        }).as('postCommnets')
        cy.visit('https://dummyapi.io/explorer')
        cy.get('.flex .cursor-pointer').contains('Comments List').click()
        cy.wait('@postCommnets').then((interceptResp)=>{
            expect(interceptResp.response.body.limit).eq(10)
        })
    })

    it('use intercept as wait',()=>{
        cy.
            intercept("GET", "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10", 
                {limit: 20, author:'velocity'})
                .as('postCommnets')
        cy.visit('https://dummyapi.io/explorer')
        cy.get('.flex .cursor-pointer').contains('Comments List').click()
        cy.wait('@postCommnets').then((interceptResp)=>{
            expect(interceptResp.response.body.limit).eq(20)
        })
    })
})