const mongoose = require('mongoose');
const { Schema } = mongoose;

const Task = new Schema({
    title: String,
    description: String
});
//nombre de la colección
module.exports = mongoose.model('empleados', Task);