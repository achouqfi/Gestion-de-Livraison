const express = require('express');
const router = express.Router();
const {
    adminGAdd,
    adminGGet,
} = require('../controllers/adminG.controller')

//get adminG
router.get('/', adminGGet)

module.exports = router;