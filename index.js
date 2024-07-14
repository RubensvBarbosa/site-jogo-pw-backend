const express = require("express");
const cors = require("cors");
const config = require('./service/config-service.js');
const { checkAndCreateDatabase } = require('./database/createDatabase');
const sequelize = require('./database/db');
const app = express(); 
const User = require('./models/user-model');

app.use(cors());
app.use(express.json());

//Routes
const userRoute = require('./routes/user-route.js');
app.use('/users', userRoute);

const startServer = async () => {
    await checkAndCreateDatabase(); // Verifique e crie o banco de dados se necessário

    await sequelize.sync({ force: false }); // force: false para não recriar a tabela

    app.listen(config.PORT, function () {
        console.log('\x1b[32m%s\x1b[0m',`Servidor rodando -> http://localhost:${config.PORT}`);
    });

};

startServer().catch(error => {
    console.error('\x1b[31m%s\x1b[0m','Não foi possivel iniciar o server:', error);
});


// Start server
// app.listen(config.PORT, function () {
//     console.log(`app running on http://localhost:${config.PORT}`);
// });