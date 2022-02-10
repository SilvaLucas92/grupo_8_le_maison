const express = require("express");
const router = express.Router();
const {body} = require ("express-validator");
const controller = require("../controller/userController.js")
const upload = require('../middlewares/multerMD');

// Express Validator
const validateUser = [
    body ('name') .notEmpty().withMessage('Campo Obligatorio').bail(),
    body ('lastName') .notEmpty().withMessage('Campo Obligatorio').bail(),
    body ('email') .isEmail().withMessage('Campo Obligatorio').bail(),
    body ('password') .isLength({min:10}).withMessage('Campo Obligatorio').bail(),
]

//login
router.get("/login", controller.login);
//register
router.get("/register", controller.register);
router.post("/register", upload.single('image'), controller.store);
//create
router.get("/create", controller.create);

module.exports = router;