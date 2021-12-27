const express = require ("express");
const router = express.Router();
const controlador = require("../controller/productController.js")


//product cart
router.get("/productCart", controlador.cart );
//productDetail
router.get("/productDetail", controlador.detail);

module.exports = router;
