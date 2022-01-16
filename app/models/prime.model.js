const mongoose = require('mongoose')

const primeSchema = new mongoose.Schema({
  mois: {
    type: String,
    required: true
  },
  montant: {
    type: String,
    required: true
  }, 
  camion: [{type:mongoose.Schema.ObjectId, ref: 'chauffeur' }],
  Commande: [{type:mongoose.Schema.ObjectId, ref: 'commande' }]
})

module.exports = mongoose.model('prime', primeSchema)