const express = require('express');
const router = express.Router();
const userController = require('../controller/apiUserController');

router.get('/users', userController.index);
router.get('/users/:id', userController.detail);
router.delete('/users/:id', userController.delete);

module.exports = router;