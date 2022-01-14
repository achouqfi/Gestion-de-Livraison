const express = require('express');
const router = express.Router();
const {
    camionAdd,
    camionGet,
    camionDelete,
    camionUpdate
} = require('../controllers/camion.controller')

//get camion
router.get('/', camionGet)
//ajout ajout
router.post('/add',camionAdd);
//ajout updat
router.delete('/:id',camionDelete)
//ajout delete
router.put('/:id',camionUpdate)

module.exports = router;