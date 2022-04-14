const express = require("express");
const router = express.Router();
const controller = require("../controller/userController.js")
const upload = require('../middlewares/multerMD');
const userValidator = require('../middlewares/expressMD');
const guestMD = require('../middlewares/guestMD');
const logged = require('../middlewares/logged')
//login
router.get("/login", guestMD, controller.login);
router.post('/login', controller.loginProcess);
//register
router.get("/register", guestMD, controller.register);
router.post("/register", upload.single('image'), userValidator, controller.store);
//logout
router.post('/logout', controller.logout);
//profile
router.get('/profile', logged, controller.profile);


module.exports = router;