
describe("simple books api glitch", () => {
    let baseUrl = "https://simple-books-api.glitch.me"
    let token
    it("post methos to generate the token", () => {
        cy.request({
            method: "POST",
            url: `${baseUrl}/api-clients/`,
            headers: {
                "content-type": "application/json"
            },
            body: {
                clientName: Math.random().toString(15).substring(8),
                clientEmail: Math.random().toString(15).substring(8) + "@example.com"
            }
        }).then((response) => {
            expect(response.status).eq(201)
            token = response.body.accessToken
            //cy.log(token)
            cy.request({
                method: "POST",
                url: `${baseUrl}/orders`,
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Bearer " + token
                },
                body: {
                    "bookId": 1,
                    "customerName": "abc"
                }
            }).then((resp) => {
                expect(resp.status).eq(201)
                let bookOrderId= resp.body.orderId
                expect(resp.body.created).to.eq(true)
                cy.request({
                    methos: "GET",
                    url:`${baseUrl}/orders/${bookOrderId}`,
                    headers:{
                        "content-type": "application/json",
                        "Authorization": "Bearer " + token
                    }
                }).then((getresp)=>{
                    expect(getresp.status).eq(200)
                    expect(getresp.body.customerName).contains("abc")
                })
            })
        })
    })
})