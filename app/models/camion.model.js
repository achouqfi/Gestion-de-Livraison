const mongoose = require('mongoose')

const camionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  immatriculation: {
    type: String,
    required: true
  },  
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('camion', camionSchema);