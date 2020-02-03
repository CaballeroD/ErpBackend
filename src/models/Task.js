const mongoose = require('mongoose');
const { Schema } = mongoose;

const Task = new Schema({
    nombre: String,
    apellido: String
});

module.exports = mongoose.model('Task', Task);