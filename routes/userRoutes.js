const express = require("express");
const router = express.Router();
const controller = require("../controller/userController.js")
const upload = require('../middlewares/multerMD');

//login
router.get("/login", controller.login);
//register
router.get("/register", controller.register);
router.post("/register", upload.single('image'), controller.store);
//create
router.get("/create", controller.create);

module.exports = router;