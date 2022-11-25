const express = require('express')
require('dotenv').config()
const { dbConnection } = require('../database/config.js')

const app = express();

dbConnection();

app.use( express.static('index.html'))

app.use ( express.json() );

app.use()

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto', process.env.PORT)
})