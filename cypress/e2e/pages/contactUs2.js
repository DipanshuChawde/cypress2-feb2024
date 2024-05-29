class contactUs{
    selectors = {
        url : 'https://webdriveruniversity.com/Contact-Us/contactus.html',
        firstName : '[name="first_name"]',
        lastName : '[name="last_name"]',
        email : '[name="email"]',
        comments : '[name="message"]',
        submitBtn : '[type="submit"]'
    }

    visitUrl(){
        cy.visit(this.selectors.url)
    }

    contactus(fn,ln,em,com){
        cy.get(this.selectors.firstName).type(fn)
        cy.get(this.selectors.lastName).type(ln)
        cy.get(this.selectors.email).type(em)
        cy.get(this.selectors.comments).type(com)
        cy.get(this.selectors.submitBtn).click()
    }

}
export default contactUs