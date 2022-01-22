const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const fs = require('fs');
const {
    CommandeAdd,
    CommandeGet,
    CommandeDelete,
    CommandeUpdate,
    CommandeStatusUpdate
} = require('../controllers/commande.controller')

//get commade
router.get('/',morgan('common',{stream: fs.createWriteStream('./commande.log', {flags: 'a'})}), CommandeGet)
//ajout
router.post('/add',CommandeAdd);
//delete
router.delete('/:id',CommandeDelete)
//updat
router.put('/:id',CommandeUpdate)
//delete
router.put('/status/:id',CommandeStatusUpdate)

module.exports = router;