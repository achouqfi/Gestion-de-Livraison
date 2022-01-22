const express = require('express');
const router = express.Router();
const fs = require('fs');
const morgan = require('morgan')
const {
    resLivraisonAdd,
    resLivraisonGet,
    resLivraisonDelete,
    resLivraisonUpdate,
    login
} = require('../controllers/ResLivraison.controller')

//get ResLivraison
router.get('/', morgan('common',{stream: fs.createWriteStream('./ResLivraison.log', {flags: 'a'})}),resLivraisonGet)
//get ResLivraison
router.post('/login',morgan('common',{stream: fs.createWriteStream('./ResLivraison.log', {flags: 'a'})}), login)
//ajout ajout
router.post('/add',morgan('common',{stream: fs.createWriteStream('./ResLivraison.log', {flags: 'a'})}),resLivraisonAdd);
//ajout updat
router.delete('/:id',morgan('common',{stream: fs.createWriteStream('./ResLivraison.log', {flags: 'a'})}),resLivraisonDelete)
//ajout delete
router.put('/:id',morgan('common',{stream: fs.createWriteStream('./ResLivraison.log', {flags: 'a'})}),resLivraisonUpdate)

module.exports = router;