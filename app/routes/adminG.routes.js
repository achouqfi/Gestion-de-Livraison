const express = require('express');
const morgan = require('morgan')
const router = express.Router();
const {
    adminGGet,
    login
} = require('../controllers/adminG.controller')

//method routes adminG
router.get('/',morgan('combined'),adminGGet)
router.post('/login',morgan('combined'),login)

module.exports = router;