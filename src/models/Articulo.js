const mongoose = require('mongoose');
const { Schema } = mongoose;

const Articulo = new Schema({
    nombre: String,
    precio: Number
});
//nombre de la colección
module.exports = mongoose.model('articulos', Articulo);