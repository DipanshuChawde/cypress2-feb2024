class homePage{
    selectors = {
        firstName : '[name="first_name"]',
        lastName : '[name="last_name"]'
    }

    contactUs(){
        cy.get(this.selectors.firstName).type('Dipanshu')
        cy.get(this.selectors.lastName).type('Chawde')
    }
}

export default homePage

//POM