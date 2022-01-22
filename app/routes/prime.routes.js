const express = require('express');
const router = express.Router();
const fs = require('fs');
const morgan = require('morgan')
const {
    PrimeGet,
    chauffeurPrime
} = require('../controllers/primes.controller')

//method routes adminG
router.get('/', morgan('common',{stream: fs.createWriteStream('./commande.log', {flags: 'a'})}),PrimeGet)
router.get('/:id',chauffeurPrime)

module.exports = router;