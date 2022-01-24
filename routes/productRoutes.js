const express = require ("express");
const router = express.Router();
const controller = require("../controller/productController")



//productList
router.get("/", controller.browse);

//product cart
router.get("/cart", controller.cart);

//newProduct
router.get('/new', controller.create);
//POST
router.post("/", controller.add);

//modProduct
router.get('/mod', controller.mod);
//PUT
router.put("/mod/:id", controller.update);

//productDetail
router.get("/:id", controller.detail);

//DELETE
router.delete("/:id", controller.delete);



module.exports = router;
