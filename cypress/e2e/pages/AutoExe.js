export default class MyPage {
    selector = {
        AEUrl : 'https://automationexercise.com/',
        loginSinup : 'a[href="/login"]',
        signUpBtn : '[data-qa="signup-button"]',
        username : '[data-qa="signup-name"]',
        email : '[data-qa="signup-email"]'


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
}