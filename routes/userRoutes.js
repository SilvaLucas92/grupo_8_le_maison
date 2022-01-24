const express = require("express");
const router = express.Router();
const controller = require("../controller/userController.js")

//login
router.get("/login", controller.login);
//register
router.get("/register", controller.register);
//create
router.get("/create", controller.create);

module.exports = router;