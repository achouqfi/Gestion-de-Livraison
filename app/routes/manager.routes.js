const express = require('express');
const router = express.Router();
const {
    ManagerAdd,
    ManagerGet,
    ManagerDelete,
    ManagerUpdate,
    login
} = require('../controllers/manager.controller')

//get manager
router.get('/', ManagerGet)
//ajout ajout
router.post('/add',ManagerAdd);
//login manager
router.post('/login',login);
//ajout updat
router.delete('/:id',ManagerDelete)
//ajout delete
router.put('/:id',ManagerUpdate)

module.exports = router;