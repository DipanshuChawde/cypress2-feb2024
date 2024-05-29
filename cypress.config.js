const { defineConfig } = require("cypress");

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

//-------------------------------------------
module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
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

    },

  },
});
