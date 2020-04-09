const mongoose = require('mongoose');
const { Schema } = mongoose;

const PedidoRecibido = new Schema({
    articulosArray: Array,
    fecha: String,
});
//nombre de la colección
module.exports = mongoose.model('pedidosRecibidos', PedidoRecibido);