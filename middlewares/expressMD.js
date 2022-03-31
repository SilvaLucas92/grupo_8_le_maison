
// Express Validator
const {body} = require ("express-validator");

const userValidator = [
    body ('name') .isLength({min:2}).withMessage('Campo Obligatorio . Debe tener minimo 2 caracteres') .notEmpty().bail(),
    body ('email') .isEmail().withMessage('Campo Obligatorio').bail(),
    body ('password') .isLength({min:6}).withMessage('La contraseña debe tener como minimo 6 caracteres').bail(),
];

module.exports = userValidator ;