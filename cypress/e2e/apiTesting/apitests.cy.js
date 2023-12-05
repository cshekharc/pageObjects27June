/// <reference types="cypress"/>
const url = "https://jsonplaceholder.typicode.com"

describe('get api request and response validations',() => {
    it('get response validation',() => {
        cy.request('GET', `${url}/posts`).then((getResponse)=>{
            expect(getResponse.status).eq(200)
            cy.log(getResponse.body[1].title)//.include("qui est esse")
            cy.log(getResponse)
        })
    })
    it('get response validation',() => {
        cy.request({
            method : 'GET',
            url : `${url}/posts/1`
        }).then((getResponse)=>{
            expect(getResponse.status).eq(200)
            cy.log(getResponse.body.title)//.include("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
        })
    })

    it('Post response validation',() => {
        cy.request({
            method :'POST' ,
            url : `${url}/posts`,
            body:{
                userId: 2, 
                title: "This is for the testing purpose"
            }
        }).then((postResponse)=>{
            cy.log(postResponse)
            expect(postResponse.status).eq(201)
            expect(postResponse.body.userId).eq(2)//.include("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
        })
    })
    it('Put response validation',() => {
        cy.request({
            method :'PUT' ,
            url : `${url}/posts/1`,
            body:{
                userId: 10, 
                title: "This is for the testing purpose"
            }
        }).then((putResponse)=>{
            cy.log(putResponse)
            expect(putResponse.status).eq(200)
            expect(putResponse.body.userId).eq(10)//.include("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
            expect(putResponse.body.title).include('This is for the testing purpose')  
        })
    })

    it('Delete response validation',() => {
        cy.request({
            method :'DELETE' ,
            url : `${url}/posts/1`,
        }).then((resp)=>{
            //cy.log(reps)
            expect(resp.status).eq(200)
            //expect(resp.body.userId).not.include(10)//.include("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
            //expect(resp.body.title).not.include('This is for the testing purpose')  
        })
    })
})

