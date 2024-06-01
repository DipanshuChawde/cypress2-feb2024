export default class MyAE{
    selectors = {
        AEUrl : 'https://automationexercise.com/',
        SignUpLoginBtn : 'a[href="/login"]',
        sinUpVT : '.signup-form > h2',
        signUpNm : '[data-qa="signup-name"]',
        signUpEmail : '[data-qa="signup-email"]',
        signUpBtn : '[data-qa="signup-button"]',
        titleMr : '[value="Mr"]',
        titleMrs : '[value="Mrs"]',
        password : '[id="password"]',
        dd : '[id="days"]',
        mm : '[id="months"]',
        yy : '[id="years"]',
        checkbox1 : '[id="newsletter"]',
        checkbox2 : '[id="optin"]',
        firstname : '[id="first_name"]',
        lastname : '[id="last_name"]',
        company : '[id="company"]',
        address1 :'[id="address1"]',
        address2 : '[id="address2"]',
        country :'[id="country"]',
        state : '[id="state"]',
        city : '[id="city"]',
        zipcode : '[id="zipcode"]',
        mobno : '[id="mobile_number"]',
        createAccBtn : '[data-qa="create-account"]',
        accCreated : '[data-qa="account-created"]'

    }

    visitUrl(){
        cy.visit(this.selectors.AEUrl)
    }

    btnClick(btn){
        cy.get(btn).click()
    }

    validateText(css,txt){
        cy.get(css).should('contain',txt)
    }

    signUpForm(data){
        cy.get(this.selectors.signUpNm).type(data.username)
       cy.get(this.selectors.signUpEmail).type(data.email)
       cy.get(this.selectors.signUpBtn).click()

    }

    AccountInfo(title,data){
        cy.get(title).check()
        cy.get(this.selectors.password).type(data.password)
        cy.get(this.selectors.dd).select(data.dd)
        cy.get(this.selectors.mm).select(data.mm)
        cy.get(this.selectors.yy).select(data.yy)
        cy.get(this.selectors.checkbox1).check()
        cy.get(this.selectors.checkbox2).check()
        cy.get(this.selectors.firstname).type(data.firstname)
        cy.get(this.selectors.lastname).type(data.lastname)
        cy.get(this.selectors.company).type(data.company)
        cy.get(this.selectors.address1).type(data.address1)
        cy.get(this.selectors.address2).type(data.adderss2)
        cy.get(this.selectors.country).select(data.country)
        cy.get(this.selectors.state).type(data.state)
        cy.get(this.selectors.city).type(data.city)
        cy.get(this.selectors.zipcode).type(data.zipcode)
        cy.get(this.selectors.mobno).type(data.mobno)
        cy.get(this.selectors.createAccBtn).click()




    }
}