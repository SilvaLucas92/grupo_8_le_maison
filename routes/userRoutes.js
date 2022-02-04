const express = require("express");
const router = express.Router();
const multer = require ("multer");
const path = require ("path");
const controller = require("../controller/userController.js")

//Configuración Multer
const storange = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/profile'))
    },
    filename: (req, file, cb) => {
        const newFilname = 'img-' + Date.now() + path.extname(file.originalname);
        cb(null, )
    }
});

const upload = multer ({ storange });

//login
router.get("/login", controller.login);
//register
router.get("/register", controller.register);
/*Procesar Registro
router.get("/", upload.single('profile') controller.***);*/
//create
router.get("/create", controller.create);

module.exports = router;