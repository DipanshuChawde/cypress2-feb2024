///<reference types = "cypress" />
import page from "../pages/3.OHRM"
import data from "../../fixtures/orange.json"
describe('verify ohrm page',function(){
    let mp=new page
    it('login page valid',function(){
        mp.visitUrl()
        mp.loginPage(data.valid)
        cy.url().should('contain','dashboard/index')
    })

    it('verify login for invalid cridentials',function(){
        mp.visitUrl()
        mp.loginPage(data.invalid)
        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
    })
})