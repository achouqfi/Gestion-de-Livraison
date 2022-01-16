const mongoose = require('mongoose')

const CommandeSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },  
    heure: {
        type: String,
        required: true
    },  
    depart: {
        type: String,
        required: true
    },  
    arrive: {
        type: String,
        required: true
    },  
    poids: {
        type: String,
        required: true
    },
    prix: {
        type: String,
        required: true
    },
    distance_kilometrage: {
        type: String,
        required: true
    },
    chauffeur: [{type:mongoose.Schema.ObjectId, ref: 'chauffeur' }]
})

module.exports = mongoose.model('commande', CommandeSchema)