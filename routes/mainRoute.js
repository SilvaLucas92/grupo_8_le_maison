const express = require("express");
const router = express.Router();
const controlador = require("../controller/mainController.js")

//home
router.get("/", controlador.home);
//login
router.get("/login", controlador.login);
//register
router.get("/register", controlador.register);
//product cart
router.get("/productCart", controlador.cart );
//productDetail
router.get("/productDetail", controlador.detail);

module.exports = router;