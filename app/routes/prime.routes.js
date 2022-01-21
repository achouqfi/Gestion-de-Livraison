const express = require('express');
const router = express.Router();
const {
    PrimeGet,
    chauffeurPrime
} = require('../controllers/primes.controller')

//method routes adminG
router.get('/',PrimeGet)
router.get('/:id',chauffeurPrime)

module.exports = router;