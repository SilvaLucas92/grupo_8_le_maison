const express = require("express");
const router = express.Router();
const controller = require("../controller/userController.js")
const upload = require('../middlewares/multerMD');
const userValidator = require('../middlewares/expressMD');
//login
router.get("/login", controller.login);
//register
router.get("/register", controller.register);
router.post("/register", upload.single('image'), userValidator, controller.store);
//create
router.get("/create", controller.create);

module.exports = router;