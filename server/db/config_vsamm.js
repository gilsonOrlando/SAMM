const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'mysqlsamm.mysql.database.azure.com',
  port: 3306,
  user: 'gilson@mysqlsamm',
  password: 'Hola.1234',
  database: 'samm'
});
connection.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established 2');
  });
module.exports = connection;
