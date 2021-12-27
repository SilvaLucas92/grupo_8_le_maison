const express = require("express");
const router = express.Router();
const controlador = require("../controller/mainController.js")

//home
router.get("/", controlador.home);


module.exports = router;