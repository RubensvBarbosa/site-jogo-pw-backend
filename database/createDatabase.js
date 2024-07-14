const mysql = require('mysql2/promise');
const config = require('../service/config-service.js')

// Configurações do banco de dados
const dbName = config.DB_DATABASE;
const dbUser = config.DB_USERNAME;
const dbPassword = config.DB_PASSWORD;
const dbHost = config.DB_HOST;

const checkAndCreateDatabase = async () => {
    let connection;
    try {
        connection = await mysql.createConnection({ host: dbHost, user: dbUser, password: dbPassword });
        const [rows] = await connection.query(`SHOW DATABASES LIKE '${dbName}';`);

        if (rows.length === 0) {
            await connection.query(`CREATE DATABASE \`${dbName}\`;`);
            console.log('\x1b[32m%s\x1b[0m',`Database '${dbName}' criada com sucesso!`);
        } else {
            console.log('\x1b[33m%s\x1b[0m',`Database '${dbName}' já existe. Não é preciso criar db.`);
        }
    } catch (err) {
        console.error('Erro criando a database:', err);
    } finally {
        if (connection) {
            await connection.end();
        }
    }
};

module.exports = { checkAndCreateDatabase };
