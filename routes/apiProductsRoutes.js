const express = require('express');
const router = express.Router();
const apiProductsController = require('../controller/apiProductsController');
router.get('/products', apiProductsController.index);
router.get('/products/:id', apiProductsController.detail);

module.exports = router;