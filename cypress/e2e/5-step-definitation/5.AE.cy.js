///<reference types ="cypress" />
import page from "../pages/5.AE"
import data from "../../fixtures/5.AEPayload"
describe('verify new user sign up page ',function(){
    let pg= new page
    let title=undefined
    it('new user sign up',function(){
        pg.visitUrl()
        pg.btnClick(pg.selectors.SignUpLoginBtn)
        pg.validateText(pg.selectors.sinUpVT,'New User Signup!')
        pg.signUpForm(data)

        //next page

        if(data.title=='Mrs'){
            title=pg.selectors.titleMrs
        }
        else title= pg.selectors.titleMr

        pg.AccountInfo(title,data)
        pg.validateText(pg.selectors.accCreated,'Account Created!')
    })
})