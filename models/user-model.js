const Sequelize = require('sequelize');
const database = require('../database/db');
const config = require('../service/config-service.js')

const User = database.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    admin:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
})

createAdminUserIfNotExists()

async function createAdminUserIfNotExists() {
    try {
        // Sincronize o modelo com o banco de dados
        await database.sync();

        // Verifique se já existe algum usuário na tabela
        const userCount = await User.count();

        if (userCount === 0) {

            // Crie um usuário admin
            await User.create({
                username: 'admin',
                password: 'admin',
                admin: true
            });

            console.log('\x1b[32m%s\x1b[0m','Admin user criado.');
        } else {
            console.log('\x1b[33m%s\x1b[0m','Já existe users.');
        }
    } catch (error) {
        console.error('\x1b[31m%s\x1b[0m','Erro ao criar o user admin:', error);
    }
}

module.exports = User;