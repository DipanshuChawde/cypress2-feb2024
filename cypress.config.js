const { defineConfig } = require("cypress");
const { configurePlugin } = require('cypress-mongodb'); //mongodb
const { verifyDownloadTasks } = require('cy-verify-downloads'); //file download

//------------exeldata-------------
const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');

//-----------mysql---------------------
const mysql = require("mysql2");
const connections = {
  stagingA: {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "db1",
  }
}

function queryDB(connectionInfo, query) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(connectionInfo);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        return reject(error);
      }
      connection.end();
      return resolve(results);
    })
  })
}
//--------------mysql-------------------------
//-------------------------------------------
module.exports = defineConfig({
  //chromeWebSecurity: false,
  chromeWebSecurity :false,   //for multitab and multi-window
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      configurePlugin(on); //mongo db

      on('task', verifyDownloadTasks); //verify download
      //------------------mysql-------------------------
      on("task", {
        // destructure the argument into the individual fields
        queryDatabase({ dbName, query }) {
          const connectionInfo = connections[dbName]
          if (!connectionInfo) {
            throw new Error(`Do not have DB connection under name ${dbName}`)
          }
          return queryDB(connectionInfo, query)
        }
      });
      //-----------------mysql---------------------------------

      //------------------exeldata--------------

      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath))
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
      })
      //---------------exeldata--------------
     },
  },
  //-------------mongodb---------------------
  env: {
    mongodb: {
        uri: 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.3',
        database: 'testdb1',
        collection: 'studentInfo'
    }
},
//-------------mongodb---------------------
//downloadsFolder:"cypress/e2e/8-fileDownload/downloadFile"

});
