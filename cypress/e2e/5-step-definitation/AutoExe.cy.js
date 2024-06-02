///<reference types="cypress" />
import page from "../pages/AutoExe"
import data from "../../fixtures/PayloadAutoE"

describe("verify login functionality",function(){
    let title=undefined
    it('create new user',function(){

        let pg = new page
        pg.visitUrl()
        pg.btnClick(pg.selector.loginSinup)
        pg.newUserSignUp(data)
        pg.btnClick(pg.selector.signUpBtn)

        //new user create
        if(data.title=='Mrs'){
            title=pg.selector.titleMrs
        }
        else {
            title=pg.selector.titleMr
        }

        pg.newUserCreate(title,data)




    })
})