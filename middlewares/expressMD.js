
// Express Validator
const {body} = require ("express-validator");

const userValidator = [
    body ('name') .notEmpty().withMessage('Campo Obligatorio').isLength({min:3}).withMessage('El nombre debe tener como minimo 3 caracteres').bail(),
    body ('email') .isEmail().withMessage('Campo Obligatorio').bail(),
    body ('password') .isLength({min:8}).withMessage('La contraseña debe tener como minimo 8 caracteres').bail(),
];

module.exports = userValidator ;