const express = require('express');
const router = express.Router();
const {
    adminGGet,
    login
} = require('../controllers/adminG.controller')

//get adminG
router.get('/', adminGGet)
router.post('/login',login)

module.exports = router;