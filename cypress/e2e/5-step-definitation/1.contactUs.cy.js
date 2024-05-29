///<reference types="cypress" />
import hp from "../pages/home1"

describe('verify contact us form',function(){
    let selectors = new hp
    it('contact us form',function(){
        
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        selectors.contactUs()
    })
})