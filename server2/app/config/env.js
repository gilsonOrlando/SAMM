const env = {
  database: 'samm',
  username: 'gilson@mysqlsamm',
  password: 'Hola.1234',
  host: 'mysqlsamm.mysql.database.azure.com',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;
