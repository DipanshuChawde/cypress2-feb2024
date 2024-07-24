///<reference types='cypress' />
import { ObjectId } from 'mongodb';
describe('verify mongodb incypress',function(){
   // let obj=new ObjectId
    it('show data from clooection',function(){
        cy.findOne({ name: 'tanish chawde'}).then(result => {
            cy.log(result); // prints the document with the _id if found, otherwise null
        });
    })
})

//https://github.com/Zaista/cypress-mongodb

// step 1 :----------- 
// run npm install cypress-mongodb

// step 2 : --------------
// module.exports = defineConfig({
//     env: {
//         mongodb: {
//             //values changes accoring to your localdb port db,name and clooection name
//             // see actual values in config.js
//             uri: 'mongodb://localhost:27017', 
//             database: 'database_name', 
//             collection: 'collection_name' 
//         }
//     },
//     e2e: {
//         setupNodeEvents(on, config) {
//             configurePlugin(on);
//         }
//     }
// });

// step 3: -----------
// cypress/support/e2e.js add the following:
// const { configurePlugin } = require('cypress-mongodb');
// addCommands();