const express = require('express');
const router = express.Router();
const {
    PrimeGet
} = require('../controllers/primes.controller')

//method routes adminG
router.get('/',PrimeGet)

module.exports = router;