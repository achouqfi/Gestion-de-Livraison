const express = require('express');
const router = express.Router();
const {
    CommandeAdd,
    CommandeGet,
    CommandeDelete,
    CommandeUpdate,
    CommandeStatusUpdate
} = require('../controllers/commande.controller')

//get commade
router.get('/', CommandeGet)
//ajout
router.post('/add',CommandeAdd);
//delete
router.delete('/:id',CommandeDelete)
//updat
router.put('/:id',CommandeUpdate)
//delete
router.put('/status/:id',CommandeStatusUpdate)

module.exports = router;