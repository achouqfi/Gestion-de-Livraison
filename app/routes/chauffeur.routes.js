const express = require('express');
const router = express.Router();
const fs = require('fs');
const morgan = require('morgan')
const {
    chauffeurAdd,
    chauffeurGet,
    chauffeurDelete,
    chauffeurUpdate,
    login
} = require('../controllers/chauffeur.controller')

//get chauffeur
router.get('/', morgan('common',{stream: fs.createWriteStream('./livreur.log', {flags: 'a'})}), chauffeurGet)
router.post('/login', login)
//ajout ajout
router.post('/add', morgan('common',{stream: fs.createWriteStream('./livreur.log', {flags: 'a'})}),chauffeurAdd);
//ajout updat
router.delete('/:id', morgan('common',{stream: fs.createWriteStream('./livreur.log', {flags: 'a'})}),chauffeurDelete)
//ajout delete
router.put('/:id', morgan('common',{stream: fs.createWriteStream('./livreur.log', {flags: 'a'})}),chauffeurUpdate)

module.exports = router;