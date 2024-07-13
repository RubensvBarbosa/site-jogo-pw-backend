const Sequelize = require('sequelize');
const database = require('../database/db');
const config = require('../service/config-service')

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

            console.log('Admin user criado.');
        } else {
            console.log('Já existe users.');
        }
    } catch (error) {
        console.error('Error creating admin user:', error);
    }
}

module.exports = User;