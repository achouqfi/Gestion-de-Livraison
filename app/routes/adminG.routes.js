const express = require('express');
const router = express.Router();
const {
    ManagerAdd,
    ManagerGet,
    ManagerDelete,
    ManagerUpdate
} = require('../controllers/manager.controller')

//get manager
router.get('/', ManagerGet)
//ajout ajout
router.post('/add',ManagerAdd);
//ajout updat
router.delete('/:id',ManagerDelete)
//ajout delete
router.put('/:id',ManagerUpdate)

module.exports = router;