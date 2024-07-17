const Sequelize = require('sequelize');
const database = require('../database/db');

const Noticia = database.define('noticias', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    text:{
        type: Sequelize.TEXT('long'),
        allowNull: false
    },
    createdBy:{
        type: Sequelize.STRING,
        allowNull: false
    }
})


database.sync();


module.exports = Noticia;