// Import packages
const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
connection = mysql.createConnection({ 
  host: "localhost",
  port: 3306,
  user: "root",
  password: "notlimah",
  database: "burgers"
});
};
// Connect to database
const pool = mysql.createPool(process.env.JAWSDB_URL || config_localhost);

module.exports = pool;
