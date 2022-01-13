// require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')

// connection a la base des donnés
mongoose.connect('mongodb://localhost/gestion-livraison', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=>console.log('connected to db'));

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//route api de manager de la livraison
const manager = require('./app/routes/manager.route');
// const manager = require('./app/routes/manager.route');
// const manager = require('./app/routes/manager.route');
// const manager = require('./app/routes/manager.route');
// const manager = require('./app/routes/manager.route');

//prefix api de manager
app.use('/api/manager', manager);


app.listen(port, () => {
  console.log("port", port);
});