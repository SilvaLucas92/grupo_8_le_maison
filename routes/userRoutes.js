const express = require("express");
const router = express.Router();
const controller = require("../controller/userController.js")
const upload = require('../middlewares/multerMD');
const userValidator = require('../middlewares/expressMD');
const userLogged = require('../middlewares/userLogged');
//login
router.get("/login", controller.login);
router.post('/login', controller.loginProcess);
//register
router.get("/register", controller.register);
router.post("/register", upload.single('image'), userValidator, controller.store);
//profile
router.get('/userProfile', userLogged, controller.profile);


module.exports = router;