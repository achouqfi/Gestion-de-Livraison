const express = require('express');
const router = express.Router();
const morgan = require('morgan')
const fs = require('fs');
const {
    camionAdd,
    camionGet,
    camionDelete,
    camionUpdate
} = require('../controllers/camion.controller')

//get camion
router.get('/', morgan('common',{stream: fs.createWriteStream('./livreur.log', {flags: 'a'})}),camionGet)
//ajout ajout
router.post('/add',morgan('common',{stream: fs.createWriteStream('./livreur.log', {flags: 'a'})}),camionAdd);
//ajout updat
router.delete('/:id',morgan('common',{stream: fs.createWriteStream('./livreur.log', {flags: 'a'})}),camionDelete)
//ajout delete
router.put('/:id',morgan('common',{stream: fs.createWriteStream('./livreur.log', {flags: 'a'})}),camionUpdate)

module.exports = router;