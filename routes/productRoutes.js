const express = require ("express");
const router = express.Router();
<<<<<<< HEAD
const controller = require("../controller/productController.js")


//product cart
router.get("/cart", controller.cart );
//productDetail
router.get("/detail", controller.detail);
//newProduct
router.get('/new', controller.create)
//modProduct
router.get('/mod', controller.mod)
=======
const controller = require("../controller/productController")


//product cart
router.get("/productCart", controller.cart );
//productDetail
router.get("/productDetail", controller.detail);
>>>>>>> de60347ce0bbbf73dc6eec5d634c490e4d94f864

module.exports = router;
