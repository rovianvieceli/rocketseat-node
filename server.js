const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando app
const app = express();

// Iniciando o DB sem user e pass
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});

requireDir('./src/models/');

// Rotas - Qualquer requisição em /api
app.use('/api', require('./src/route.js'));

app.listen(3001);