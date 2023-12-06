/// <reference types="cypress" />

describe("Tesst datepicket", () => {
    it.skip("select date from datepicker", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})
        cy.get('#datepicker').click()
        cy.get('.datepicker-switch').first().click() // .eq(0)

        function selectYear(year){
            cy.get('.datepicker-switch').first().then(yearText =>{
                let yearName = yearText.text()
                // cy.log("Year is :" +yearName)
                if(!yearName.includes(year)){
                    cy.get('[class="prev"]').eq(0).click({force : true})  
                    selectYear(year)
                }
            })
        }

        function selectMonth(monthtose){
            cy.get('[class="month"]').then(() =>{
                // cy.log('selecting month')
                cy.contains(monthtose).click({force:true})
            })
        }

        function day(dayto){
            cy.get('[class="day"]').contains(dayto).click({force: true})
        }

        selectYear('2011')
        selectMonth('May')
        day('1')

        // cy.get('.form-control').then(dateText =>{
        //     let expectedDay = dateText.text()
        //     expect(expectedDay).to.include('04-28-2035')
        // })
        
    })
})