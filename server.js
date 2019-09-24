const express = require('express');
const mongoose = require('mongoose');

// Iniciando app
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

// Rota raiz
app.get('/', (request, response) => {
    response.send('Hello!');
});

app.listen(3001);