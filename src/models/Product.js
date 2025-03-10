// Quais os campos que o produto pode ter e os tipos de valores que podem salvar
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required:true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Registra o plugin de paginacao para o mongoose usar
ProductSchema.plugin(mongoosePaginate);

// Registrar a model na aplicação disponivel para toda ela
mongoose.model('Product', ProductSchema);