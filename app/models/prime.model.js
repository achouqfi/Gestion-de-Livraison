const mongoose = require('mongoose')

const primeSchema = new mongoose.Schema({
  mois: {
    type: String,
    required: true
  },
  livraison_prix: {
    type: String,
    required: true
  }, 
  chauffeur: {type:mongoose.Schema.ObjectId, ref: 'chauffeur' },
  livraison: {type:mongoose.Schema.ObjectId, ref: 'commande' }
})

module.exports = mongoose.model('prime', primeSchema)