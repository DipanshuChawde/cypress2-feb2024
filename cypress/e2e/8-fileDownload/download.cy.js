///<reference types='cypress' />

const { addCommands } = require("cypress-mongodb/dist/index-browser")

describe('verify file download',function(){
  
    it('verify download file by cy.readFile()',function(){
        cy.visit('http://autopract.com/selenium/download.html')
        cy.get('#download').click()
        cy.readFile('cypress/downloads/sample2.csv', {timeout: 60000}).should('contain','Eldon Base') 
    })

    it('verify download file by plugin',function(){
        cy.visit('http://autopract.com/selenium/download.html')
        cy.get('#download').click()
        cy.verifyDownload('sample2.csv') //only file name requires not path
        //here by default it will create download folder in cypress folder and download file in it
    })

    it('verify download file by plugin',function(){
        cy.visit('http://autopract.com/selenium/download.html')
        cy.get('#download').click()
        cy.verifyDownload('sample2.csv',{timeout: 25000})
        //in cypress.config.js add below line in module.exports before/outside e2e{} 
        //downloadsFolder:"cypress/e2e/8-fileDownload/downloadFile" (download file path)
    })
})

//https://github.com/elaichenkov/cy-verify-downloads

// steps to download Plugin

// step1: run addCommands
// npm i -D cy-verify-downloads

// step2: Add this line to your project's cypress/support/e2e.js
// require('cy-verify-downloads').addCustomCommand();

// Then you need to add the following lines of code to your project's cypress.config.js:

// const { verifyDownloadTasks } = require('cy-verify-downloads'); //copy this to top 

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       on('task', verifyDownloadTasks); //only copy this to e2e: inside setupnode event
//     },
//   },
// });