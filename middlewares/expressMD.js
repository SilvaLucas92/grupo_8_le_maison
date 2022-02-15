
// Express Validator
const {body} = require ("express-validator");

const userValidator = [
    body ('name') .notEmpty().withMessage('Campo Obligatorio').bail(),
    body ('email') .isEmail().withMessage('Campo Obligatorio').bail(),
    body ('password') .isLength({min:6}).withMessage('Campo Obligatorio').bail(),
];

module.exports = userValidator ;