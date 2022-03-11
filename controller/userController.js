const {validationResult} = require("express-validator");
const bcrypt = require('bcryptjs');
const {User} = require('../database/models');

const controlador = {
    login: (req, res)=>{
        res.render("../views/users/login");
    },
    register: (req, res)=>{
        res.render("../views/users/register");
    },
    store: async (req, res) => {
        const errors = validationResult(req);
        console.log(errors);
        if(!errors.isEmpty()) {
            let valores = req.body;
            let validaciones = errors.mapped();
            return res.render('../views/users/register.ejs', {
                validaciones: validaciones,
                valores: valores
            })
        }        
        const emailOk =  await User.findOne({where: {email: req.body.email}}); 
        if (emailOk) {
        return res.send('estas logueado');
        }
        const userToStore = await User.create({
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10)
        });
        return res.redirect('/user/login');
    },
    loginProcess: async (req, res) => {
            const userToLogin = await User.findOne({where: {email: req.body.email}}); 
            if (userToLogin) {
                let passwordUser = req.body.password;
                const passwordOk = bcrypt.compareSync(passwordUser, userToLogin.password);
                if(passwordOk) {   
                    delete userToLogin.password;                 
                    req.session.userLogged = userToLogin;
                    if(req.body.remindMe) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                    }
                    return res.redirect('/');
                }
                let passwordError = 'Contraseña  incorrecta';
                return res.render('../views/users/login.ejs', {passwordError});
            }
            let error = 'Email no registrado';
            return res.render('../views/users/login.ejs', {error});
    },
    profile: (req, res) => {
        return res.render("../views/users/userProfile.ejs", {user:req.session.userLogged});
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    }
};

module.exports = controlador;

