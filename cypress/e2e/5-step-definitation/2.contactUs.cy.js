///<reference types="cypress" />
import hp from "../pages/contactUs2"



describe('verify contact us page', function () {
    let selector = new hp
    it('contact us', function () {
        selector.visitUrl()
        selector.contactus('dipanshu', 'chawde', 'dipanshu@gmail.com', 'hello')
        cy.get('h1').should('contain', 'Thank You')
    })
})