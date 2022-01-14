const express = require('express');
const router = express.Router();
const {
    resLivraisonAdd,
    resLivraisonGet,
    resLivraisonDelete,
    resLivraisonUpdate,
    login
} = require('../controllers/ResLivraison.controller')

//get ResLivraison
router.get('/', resLivraisonGet)
//get ResLivraison
router.post('/login', login)
//ajout ajout
router.post('/add',resLivraisonAdd);
//ajout updat
router.delete('/:id',resLivraisonDelete)
//ajout delete
router.put('/:id',resLivraisonUpdate)

module.exports = router;