///<reference types="cypress" />
//https://testersdock.com/cypress-new-window/   (for example)


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

        cy.get('a[class="thm-btn"]').eq(2).scrollTo('bottom',{ensureScrollable: false}).invoke('removeAttr','target').click()
        cy.url().should('contains','notification/')


        // cy.window().then(win => {
        //     cy.stub(win, 'open').as('pdfOpen');
        //   });
          
        //   cy.get('a[class="thm-btn"]').eq(2).scrollTo('bottom',{ensureScrollable: false}).invoke('removeAttr','target').click()
        // //cy.url().should('contains','notification/')
        //  cy.get('@pdfOpen').should('be.called');
          //cy.url().should('contains','notification/')


        // cy.intercept('GET', '**/*.pdf').as('getPdf');

        // // Click the link that triggers the PDF load
        // cy.get('a[class="thm-btn"]').eq(2).scrollTo('bottom',{ensureScrollable: false}).invoke('removeAttr','target').click()
    
        // // Wait for the intercepted request and assert its status
        // cy.wait('@getPdf').then((interception) => {
        //   expect(interception.response.statusCode).to.eq(200);
        // });
     

    //   cy.intercept('GEt','/notification/Date_Extention_APC-3064_APC-420.pdf').as('getResourse')


     
   
    
    
    //cy.url().should('contains','notification/')
    //     cy.wait('@getResourse')
        // cy.get('a[class="thm-btn"]').eq(2).scrollTo('bottom',{ensureScrollable: false}).invoke('attr','href').then(myLink => {
        //     cy.log(myLink);
        //    cy.visit(`${link}${mylink}`)


           

        //  })
    })
})