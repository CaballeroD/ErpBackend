
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
//https://flaviocopes.com/cors/
//https://medium.com/@alexishevia/using-cors-in-express-cac7e29b005b
var cors = require('cors');

const app = express();

mongoose.connect(process.env.VUE_APP_DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(db => console.log("DB is connected"))
    .catch(err => console.error(err));

//Settings

app.set('port', VUE_APP_PORT);

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


//Routes
//Añade al principio tasks para que dentro del fichero tasks no haya que escribirlo muchas veces
app.use('/pedidos', require('./routes/pedidos'));
app.use('/pedidosRecibidos', require('./routes/pedidosRecibidos'));
app.use('/pedidosArchivados', require('./routes/pedidosArchivados'));
app.use('/articulos', require('./routes/articulos'));
app.use('/empleados', require('./routes/empleados'));

//Static files
//Esta es la ruta de donde coge el frontend
app.use(express.static(__dirname + '/public'))

//Server is listening
app.listen(3000, () => {
    console.log('Server on port ', app.get('port'));
});


