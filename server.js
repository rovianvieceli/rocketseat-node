const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const port = 3001;

// Iniciando app
const app = express();

// Permitir envio em Json na Request
app.use(express.json());

// Permitindo o uso por outros dominios
app.use(cors());

// Iniciando o DB sem user e pass
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    'useNewUrlParser': true,
    'useUnifiedTopology': true,
    'useFindAndModify': false
});

// habilitando as models
requireDir('./src/models/');

// Rotas - Qualquer requisição em /api
app.use('/api', require('./src/route.js'));

// start do servidor
app.listen(port, () => {
    console.info(`Listing on http://localhost:${port}`)
});