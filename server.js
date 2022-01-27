require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// connection a la base des donnés
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=>console.log('connected to db'));

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors())

//route api de manager de la livraison
const manager = require('./app/routes/manager.routes');
const ResLivraison = require('./app/routes/ResLivraison.routes');
const adminG = require('./app/routes/adminG.routes');
const camion = require('./app/routes/camion.routes');
const chauffeur = require('./app/routes/chauffeur.routes');
const commande = require('./app/routes/commande.routes');
const prime = require('./app/routes/prime.routes');

//prefix api
app.use('/api/manager',manager);
app.use('/api/ResLivraison', ResLivraison);
app.use('/api/adminG', adminG);
app.use('/api/camion', camion);
app.use('/api/chauffeur', chauffeur);
app.use('/api/commande', commande);
app.use('/api/prime', prime);

app.listen(port, () => {
  console.log("port", port);
});