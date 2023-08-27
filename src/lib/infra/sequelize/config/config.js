require("dotenv").config()
const Sequelize = require("sequelize")
const { Config } = require("../../../../config")

const { DATABASE_USER,DATABASE_PASSWORD,DATABASE_HOST, 
  DATABASE_NAME,DATABASE_PORT, 
  DATABASE_SYNC,DATABASE_LOGGING } = Config

const databaseCredentials = {
  development: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host:DATABASE_HOST,
    dialect: "postgres"
  },
  test: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host:DATABASE_HOST,
    dialect: "postgres"
  },
  production: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host:DATABASE_HOST,
    dialect: "postgres"
  }
}

const { username, password, database, host, dialect } = databaseCredentials[NODE_ENV]

module.exports = databaseCredentials

module.exports.connection = new Sequelize(database, username, password, {
  host,
  dialect,
  port: 3306,
  dialectOptions: {
    multipleStatements: true
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: DATABASE_LOGGING
})
