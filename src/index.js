const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
//https://flaviocopes.com/cors/
//https://medium.com/@alexishevia/using-cors-in-express-cac7e29b005b
var cors = require('cors');

const app = express();

//nombre de la base de datos
mongoose.connect('mongodb+srv://dbUser:MongoDBAdmin2020@prueba-m5hwc.mongodb.net/ERP_DB?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(db => console.log("DB is connected"))
    .catch(err => console.error(err));

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routes
//Añade al principio tasks para que dentro del fichero tasks no haya que escribirlo muchas veces
app.use('/pedidos', require('./routes/pedidos'));
app.use('/pedidosRecibidos', require('./routes/pedidosRecibidos'));
app.use('/articulos', require('./routes/articulos'));
app.use('/empleados', require('./routes/empleados'));

//Static files
//Esta es la ruta de donde coge el frontend
app.use(express.static(__dirname + '/public'))

//Server is listening
app.listen(3000, () => {
    console.log('Server on port ', app.get('port'));
});