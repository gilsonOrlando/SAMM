const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('samm', 'gilson@mysqlsamm', 'Hola.1234', {
  host: 'mysqlsamm.mysql.database.azure.com',
  port: 3306,
  dialect: 'mysql',
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 600000,
    idle: 600000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

