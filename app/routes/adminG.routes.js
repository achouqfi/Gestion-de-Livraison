const express = require('express');
const fs = require('fs')
const router = express.Router();
const morgan = require('morgan')
const {adminG} = require('../middlewares/middleware')
const {
    adminGGet,
    login
} = require('../controllers/adminG.controller')

//method routes adminG
router.get('/',morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}),adminG,adminGGet)
router.post('/login',morgan('combined'),login)

module.exports = router;