const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(request, result) {
        const product = await Product.find();
        return result.json(product);
    }
};