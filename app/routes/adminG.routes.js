const express = require('express');
const morgan = require('morgan')
const fs = require('fs')
const router = express.Router();
const {
    adminGGet,
    login
} = require('../controllers/adminG.controller')

//method routes adminG
router.get('/',morgan('common', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}),adminGGet)
router.post('/login',morgan('combined'),login)

module.exports = router;