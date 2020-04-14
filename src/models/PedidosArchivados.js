const mongoose = require('mongoose');
const { Schema } = mongoose;

const PedidoArchivado = new Schema({
    articulosArray: Array,
    fecha: String,
});
//nombre de la colección
module.exports = mongoose.model('pedidosArchivados', PedidoArchivado);