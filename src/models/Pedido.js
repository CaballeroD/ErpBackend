const mongoose = require('mongoose');
const { Schema } = mongoose;

const Pedido = new Schema({
    articulosArray: Array,
    fecha: String,
});
//nombre de la colección
module.exports = mongoose.model('empleados', Pedido);