const express = require ("express");
const router = express.Router();
const controller = require("../controller/productController");
const fileUpload = require('../middlewares/multerMD');
const productValidator = require('../middlewares/productValidator')


//productList
router.get("/", controller.browse);
//Search
router.get('/search', controller.search);
//product cart
router.get('/cart/:id', controller.addCart);

//newProduct
router.get('/new', controller.create);
//POST
router.post("/", fileUpload.single('image'), productValidator, controller.add);

//modProduct
router.get('/edit/:id', controller.edit);
router.put('/:id', fileUpload.single('image'), controller.update);

//productDetail
router.get("/:id", controller.detail);

//DELETE
router.delete("/:id", controller.delete);



module.exports = router;
