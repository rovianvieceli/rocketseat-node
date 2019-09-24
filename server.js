const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando app
const app = express();

// Iniciando o DB sem user e pass
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});

requireDir('./src/models/');

const Product = mongoose.model('Product');

// Rota raiz
app.get('/', (request, response) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with react-native',
        url: 'http://reactnative.com'
    });

    return response.send('Hello!');
});

app.listen(3001);