
const express = require('express');
//const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan('dev'));

//app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.json());

// panggil routes
var routes = require('./routes');
    routes(app);
// daftarkan menu route dari index
app.use('/auth', require('./middleware'));

app.listen(3000, () => {
    console.log(`Server started on port`);
});