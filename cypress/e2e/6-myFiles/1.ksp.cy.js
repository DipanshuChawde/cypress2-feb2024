///<reference types="cypress" />



describe('verify multitab windows',function(){
    let link=undefined
    it('verifu multitab options',function(){
        cy.visit('https://ksp-recruitment.in/')
        cy.scrollTo('bottom')
        cy.get('a[class="btn btn-success"]').eq(3).invoke('removeAttr','target').click()
        cy.url().then(myLink => {
            cy.log(myLink);
            link=myLink
        })

    //   cy.intercept('GEt','/notification/Date_Extention_APC-3064_APC-420.pdf').as('getResourse')


     cy.get('a[class="thm-btn"]').eq(2).scrollTo('bottom',{ensureScrollable: false}).invoke('removeAttr','target').click({ timeout: 120000 })
     cy.url().should('contains','notification/')
    //     cy.wait('@getResourse')
        // cy.get('a[class="thm-btn"]').eq(2).scrollTo('bottom',{ensureScrollable: false}).invoke('attr','href').then(myLink => {
        //     cy.log(myLink);
        //    cy.visit(`${link}${mylink}`)


           

        //  })
    })
})