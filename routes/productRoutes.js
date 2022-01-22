const express = require ("express");
const router = express.Router();
const controller = require("../controller/productController.js")


//product cart
router.get("/cart", controller.cart );
//productDetail
router.get("/detail", controller.detail);
//newProduct
router.get('/new', controller.create)
//modProduct
router.get('/mod', controller.mod)



module.exports = router;
