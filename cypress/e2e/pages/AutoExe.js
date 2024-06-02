export default class MyPage {
    selector = {
        AEUrl : 'https://automationexercise.com/',
        loginSinup : 'a[href="/login"]',
        signUpBtn : '[data-qa="signup-button"]',
        username : '[data-qa="signup-name"]',
        email : '[data-qa="signup-email"]',
        titleMr : '[value="Mr"]',
        titleMrs : '[value="Mrs"]',
        password : '[id="password"]',
        dd : '[id="days"]',
        mm : '[id="months"]',
        yy : '[id="years"]',
        checkbox1 : '[id="newsletter"]',
        checkbox2 : '[id="optin"]'


    }

    visitUrl(){
        cy.visit(this.selector.AEUrl)
    }

    btnClick(css){
        cy.get(css).click()

    }

    newUserSignUp(data){
        cy.get(this.selector.username).type(data.username)
        cy.get(this.selector.email).type(data.email)
    }

    newUserCreate(title,data){
        cy.get(title).check()
        cy.get(this.selector.password).type(data.password)
        cy.get(this.selector.dd).select(data.dd)
        cy.get(this.selector.mm).select(data.mm)
        cy.get(this.selector.yy).select(data.yy)
        cy.get(this.selector.checkbox1).check()
        cy.get(this.selector.checkbox2).check()
    }
}