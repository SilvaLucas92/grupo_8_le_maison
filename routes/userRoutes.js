const express = require("express");
const router = express.Router();
const controlador = require("../controller/userController.js")

//login
router.get("/login", controlador.login);
//register
router.get("/register", controlador.register);

module.exports = router;