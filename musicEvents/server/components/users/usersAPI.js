const controler = require('./usersController');
const express = require('express')
const router = express.Router();

// GET 
router.get('/',controler.getUsers);
router.get('/:userId',controler.getUserById);

// POST
router.post('/',controler.createUser);
router.post('/logIn',controler.logIntCheck);

// PATCH
router.patch('/:userId',controler.updateUserById);

//DELETE
router.delete('/:userId',controler.deleteUserById)

module.exports = router;
