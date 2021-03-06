const mongoose = require('mongoose')

const chauffeurSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },  
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  camion: {type:mongoose.Schema.ObjectId, ref: 'camion'},
})

module.exports = mongoose.model('chauffeur', chauffeurSchema)