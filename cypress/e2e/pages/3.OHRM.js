class myPage{
    selector ={
        url : 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        userName : '[name="username"]',
        password : '[name="password"]',
        loginBtn : '[type="submit"]'
    }

    visitUrl(){
        cy.visit(this.selector.url)
    }

    loginPage(loginData){
        cy.get(this.selector.userName).type(loginData.username)
        cy.get(this.selector.password).type(loginData.password)
        cy.get(this.selector.loginBtn).click()
    }
}

export default myPage