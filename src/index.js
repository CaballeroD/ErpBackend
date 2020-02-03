const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();


mongoose.connect('mongodb+srv://dbUser:MongoDBAdmin2020@prueba-m5hwc.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log("DB is connected"))
    .catch(err => console.error(err));

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
//Añade al principio tasks para que dentro del fichero tasks no haya que escribirlo muchas veces
app.use('/tasks', require('./routes/tasks'));

//Static files
//Esta es la ruta de donde coge el frontend
app.use(express.static(__dirname + '/public'))

//Server is listening
app.listen(3000, () => {
    console.log('Server on port ', app.get('port'));
});