const express = require ("express");
const router = express.Router();
const controller = require("../controller/productController")
const fileUpload = require('../middlewares/multerMD');


//productList
router.get("/", controller.browse);

//product cart
router.get("/cart", controller.cart);
router.get('/cart/:id', controller.addCart);

//newProduct
router.get('/new', controller.create);
//POST
router.post("/", fileUpload.single('image'), controller.add);

//modProduct
router.get('/edit/:id', controller.edit);
router.put('/:id', controller.update);

//productDetail
router.get("/:id", controller.detail);

//DELETE
router.delete("/:id", controller.delete);



module.exports = router;
