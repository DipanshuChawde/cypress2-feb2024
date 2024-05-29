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

Cypress.Commands.add('registerUser', (un,ln,pin) => { 
    cy.on('window:alart',function(text){
        expect(text).to.contains('Customer added successfully')
        return true
    })

    cy.get('input[ placeholder="First Name"]').type(un)
    cy.get('input[ placeholder="Last Name"]').type(ln)
    cy.get('input[ placeholder="Post Code"]').type(pin)
    cy.get('button[type="submit"]').click({force:true})
 })