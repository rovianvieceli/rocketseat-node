const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(request, result) {
        const product = await Product.find();
        return result.json(product);
    },

    async show(request, result) {
        const product = await Product.findById(request.params.id);
        return result.json(product);
    },

    async store(request, result) {
        const product = await Product.create(request.body);
        return result.json(product);
    },

    async update(request, result) {
        const product = await Product.findByIdAndUpdate(request.params.id, request.body, {
            new: true
        });
        return result.json(product);
    },

    async destroy(request, result) {
        const product = await Product.findByIdAndRemove(request.params.id);
        return result.send();
    }

};