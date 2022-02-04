const {validatorResult} = require("express-validator");
const controlador = {
    login: (req, res)=>{
        res.render("../views/users/login");
    },
    register: (req, res)=>{
        res.render("../views/users/register");
    },
    create: (req, res)=>{
        res.render("../views/users/create");
    }
};

module.exports = controlador;