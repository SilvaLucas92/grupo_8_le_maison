const express = require('express');
const router = express.Router();
const controller = require('../controller/apiUserController');

router.get('/users', controller.index);
router.get('/users/:id', controller.detail);

module.exports = router;