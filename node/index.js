const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Importar las rutas de los productos
const pastura = require('./routes/pastura.route'); 
//const cors = require('cors');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}));


// Conexion a mongo
var mongoose = require('mongoose');
var dev_db_url = 'mongodb+srv://pepe:pepe@cluster0.smw1sts.mongodb.net/test?retryWrites=true&w=majority';
var mongoDB = dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use(express.static(__dirname + '/views'));

app.use('/pasturas', pastura);

//app.use(cors());

//npm insall --save ejs
//app.set('view engine', 'ejs')

let port = 1234;

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(port, () => {
    console.log('Servidor arriba!');
});