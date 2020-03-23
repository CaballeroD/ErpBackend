const mongoose = require('mongoose');
const { Schema } = mongoose;

const Empleado = new Schema({
    nombre: String
});
//nombre de la colección
module.exports = mongoose.model('empleados', Empleado);