const mongoose = require('mongoose')

const CommandeSchema = new mongoose.Schema({
    heure: {
        type: String,
        required: true
    },
    depart: {
        type: String,
        required: true
    },
    ville_depart: {
        type: String,
        required: true
    },
    ville_arrive: {
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
    status: {
        type: String,
        required: true
    },
    chauffeur: { type:mongoose.Schema.ObjectId, ref: 'chauffeur' }
})

module.exports = mongoose.model('commande', CommandeSchema)