const express = require("express");
const router = express.Router();
const multer = require ("multer");
const path = require ("path");
const {body} = require ("express-validator");
const controller = require("../controller/userController.js")

// Express Validator

const validateUser = [
    body ('name') .notEmpty().withMessage('Campo Obligatorio').bail(),
    body ('lastName') .notEmpty().withMessage('Campo Obligatorio').bail(),
    body ('email') .isEmail().withMessage('Campo Obligatorio').bail(),
    body ('password') .isLength({min:10}).withMessage('Campo Obligatorio').bail(),
]
//Configuración Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images'))
    },
    filename: (req, file, cb) => {
        const newFilname = 'img-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilname)
    }
});

const upload = multer ({ storage });

//login
router.get("/login", controller.login);
//register
router.get("/register", controller.register);
router.post("/register", upload.single('image'), controller.store);
//create
router.get("/create", controller.create);

module.exports = router;