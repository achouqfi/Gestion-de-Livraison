const express = require('express');
const router = express.Router();
const {
    chauffeurAdd,
    chauffeurGet,
    chauffeurDelete,
    chauffeurUpdate,
    login
} = require('../controllers/chauffeur.controller')

//get chauffeur
router.get('/', chauffeurGet)
router.post('/login', login)
//ajout ajout
router.post('/add',chauffeurAdd);
//ajout updat
router.delete('/:id',chauffeurDelete)
//ajout delete
router.put('/:id',chauffeurUpdate)

module.exports = router;