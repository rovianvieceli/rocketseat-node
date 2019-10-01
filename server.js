const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando app
const app = express();

// Permitir envio em Json na Request
app.use(express.json());

// Iniciando o DB sem user e pass
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', {
        'useNewUrlParser': true,
        'useUnifiedTopology': true,
        'useFindAndModify': false
    });

// habilitando as models
requireDir('./src/models/');

// Rotas - Qualquer requisição em /api
app.use('/api', require('./src/route.js'));

// start do servidor
app.listen(3001);