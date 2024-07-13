const { Sequelize } = require('sequelize');
const config = require('../service/config-service')

// Configurações do banco de dados
const dbName = config.DB_DATABASE;
const dbUser = config.DB_USERNAME;
const dbPassword = config.DB_PASSWORD;
const dbHost = config.DB_HOST;
const dbConnection = config.DB_CONNECTION


const sequelize = new Sequelize(`${dbName}`, `${dbUser}`, `${dbPassword}`, {
    host: `${dbHost}`,
    dialect: `${dbConnection}`,
});

module.exports = sequelize;
