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
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            let emailOk = userData.find(user => user.email === req.body.email);
            if (emailOk) {
            res.send('Email repetido')
            }
            let idGenerator = () => {
            let lastUser = userData[userData.length - 1];
            let lastUserId = lastUser.id;
            return lastUserId + 1;
            }
            userData.push({
            id: idGenerator(),
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            image: req.file? req.file.filename : null
            });
            fs.writeFileSync(userPath, JSON.stringify(userData, null, ' '));
            return res.redirect('/user/login')
        } else {
            res.render("../views/users/register", {
                errors: errors.array(),
                old: req.body
            });
        }
    },
    create: (req, res)=>{
        res.render("../views/users/create");
    }
};

module.exports = controlador;