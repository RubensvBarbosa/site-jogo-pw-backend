const express = require("express");
const cors = require("cors");
const config = require('./service/config-service');
const app = express(); 

app.use(cors());
app.use(express.json());


//Start server
app.listen(config.PORT, function () {
    console.log(`app running on localhost:${config.PORT}`);
});