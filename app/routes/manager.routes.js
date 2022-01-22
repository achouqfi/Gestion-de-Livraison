const express = require('express');
const router = express.Router();
const fs = require('fs');
const morgan = require('morgan')
const {
    ManagerAdd,
    ManagerGet,
    ManagerDelete,
    ManagerUpdate,
    login
} = require('../controllers/manager.controller')

//get manager
router.get('/', morgan('common',{stream: fs.createWriteStream('./manager.log', {flags: 'a'})}), ManagerGet)
//ajout ajout
router.post('/add',morgan('common',{stream: fs.createWriteStream('./manager.log', {flags: 'a'})}),ManagerAdd);
//login manager
router.post('/login',morgan('common',{stream: fs.createWriteStream('./manager.log', {flags: 'a'})}),login);
//ajout updat
router.delete('/:id',morgan('common',{stream: fs.createWriteStream('./manager.log', {flags: 'a'})}),ManagerDelete)
//ajout delete
router.put('/:id',morgan('common',{stream: fs.createWriteStream('./manager.log', {flags: 'a'})}),ManagerUpdate)

module.exports = router;