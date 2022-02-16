const {validationResult} = require("express-validator");
const path = require('path');
const fs =  require('fs');
const userPath = path.join(__dirname, '../data/userDataBase.json');
const userData = JSON.parse(fs.readFileSync(userPath, 'utf-8'));
const bcrypt = require('bcryptjs');

const controlador = {
    login: (req, res)=>{
        res.render("../views/users/login");
    },
    register: (req, res)=>{
        res.render("../views/users/register");
    },
    store: (req, res) => {
        const errors = validationResult(req);
        console.log(errors);
        if(!errors.isEmpty()) {
            let valores = req.body;
            let validaciones = errors.mapped();
            res.render('../views/users/register.ejs', {
                validaciones: validaciones,
                valores: valores
            })
        }        
        let emailOk = userData.find(user => user.email === req.body.email);
        if (emailOk) {
        res.send('estas logueado');
        }
        let idGenerator = () => {
        let lastUser = userData[userData.length - 1];
        let lastUserId = lastUser.id;
        return lastUserId + 1;
        };
        userData.push({
        id: idGenerator(),
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 10),
        image: req.file? req.file.filename : null
        });
        fs.writeFileSync(userPath, JSON.stringify(userData, null, ' '));
        return res.redirect('login');    
    },
    loginProcess: (req, res) =>{
        const userToLogin = userData.find(oneUser => oneUser.email === req.body.email);
        
        if (userToLogin) {
            const isPasswordCorrect = bcrypt.compareSync(req.body.password, userToLogin.password);

            if (isPasswordCorrect){

                delete userToLogin.password
                
                req.session.userLogged = userToLogin;
                console.log(req.session.userLogged);
                return res.redirect('/');
            }
        }
        let error = 'email no logueado';
        res.render('../views/users/login.ejs', {error});
    },
    profile: (req, res) => {
        return res.render("../views/users/userProfile.ejs");
    }
};

module.exports = controlador;