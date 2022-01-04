const express = require ("express");
const router = express.Router();
const controller = require("../controller/productController")


//product cart
router.get("/productCart", controller.cart );
//productDetail
router.get("/productDetail", controller.detail);

module.exports = router;
