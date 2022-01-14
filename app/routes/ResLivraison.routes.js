const express = require('express');
const router = express.Router();
const {
    resLivraisonAdd,
    resLivraisonGet,
    resLivraisonDelete,
    resLivraisonUpdate
} = require('../controllers/ResLivraison.controller')

//get ResLivraison
router.get('/', resLivraisonGet)
//ajout ajout
router.post('/add',resLivraisonAdd);
//ajout updat
router.delete('/:id',resLivraisonDelete)
//ajout delete
router.put('/:id',resLivraisonUpdate)

module.exports = router;