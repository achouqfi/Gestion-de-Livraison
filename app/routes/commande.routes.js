const express = require('express');
const router = express.Router();
const {
    CommandeAdd,
    CommandeGet,
    CommandeDelete,
    CommandeUpdate
} = require('../controllers/commande.controller')

//get commade
router.get('/', CommandeGet)
//ajout ajout
router.post('/add',CommandeAdd);
//ajout updat
router.delete('/:id',CommandeDelete)
//ajout delete
router.put('/:id',CommandeUpdate)

module.exports = router;