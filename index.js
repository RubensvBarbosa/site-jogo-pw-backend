const express = require("express");
const cors = require("cors");
const config = require('./service/config-service');
const { checkAndCreateDatabase } = require('./database/createDatabase');
const sequelize = require('./database/db');
const app = express(); 
const User = require('./models/user-model');

app.use(cors());
app.use(express.json());

const startServer = async () => {
    await checkAndCreateDatabase(); // Verifique e crie o banco de dados se necessário

    await sequelize.sync({ force: false }); // force: false para não recriar a tabela

    app.listen(config.PORT, function () {
        console.log(`App rodando -> http://localhost:${config.PORT}`);
    });

};

startServer().catch(error => {
    console.error('Unable to start the server:', error);
});


// Start server
// app.listen(config.PORT, function () {
//     console.log(`app running on http://localhost:${config.PORT}`);
// });