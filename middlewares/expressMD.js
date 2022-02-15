const path = require('path');

// Express Validator
const {body} = require ("express-validator");
const express = require('express');

const validateUser = [
    body ('name') .notEmpty().withMessage('Campo Obligatorio').bail(),
    body ('lastName') .notEmpty().withMessage('Campo Obligatorio').bail(),
    body ('email') .isEmail().withMessage('Campo Obligatorio').bail(),
    body ('password') .isLength({min:10}).withMessage('Campo Obligatorio').bail(),
]

const validate = express ({storage});

module.exports = validate;