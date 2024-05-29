///<reference types='cypress' />
describe('verify login page with exel payload data', function () {
    it('verify login page with valid data', function () {
        let book1Path = 'C:/Users/tanis/Documents/dipanshu_sw/DemoCypress/cypress/fixtures/Book1.xlsx'
        cy.parseXlsx(book1Path).then((json) => {
            cy.log(json[0].data)
            for(let i=1;i<json[0].data.length;i++){
                cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('[name="first_name"]').type(json[0].data[i][0])
                cy.get('[name="last_name"]').type(json[0].data[i][1])
                cy.get('[name="email"]').type(json[0].data[i][2])
                cy.get('[name="message"]').type(json[0].data[i][3])
                cy.get('[value="SUBMIT"]').click()
                cy.get('h1').should('have.text', "Thank You for your Message!")
            }

        })

    })
})
