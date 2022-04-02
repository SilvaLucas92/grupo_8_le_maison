// Express Validator
const {body} = require ("express-validator");

const userValidator = [
    body ('name') .isLength({min:2}).withMessage('Campo Obligatorio . Debe tener minimo 2 caracteres') .notEmpty().bail(),
    body ('email') .isEmail().withMessage('Campo Obligatorio').bail(),
    body ('password') .isLength({min:6}).withMessage('La contraseña debe tener como minimo 6 caracteres').bail(),
];

const productValidator = [
    body ('name').isLength({min: 5}).withMessage('Campo Obligatorio').notEmpty().bail(),
    body ('description').notEmpty().withMessage('Campo Obligatorio'),
    body ('category').notEmpty().withMessage('Campo Obligatorio'),
    body ('materials').notEmpty().withMessage('Campo Obligatorio'),
    body ('colors').notEmpty().withMessage('Campo Obligatorio'),
    body ('price').notEmpty().withMessage('Campo Obligatorio')
]

module.exports = userValidator;
module.exports = productValidator;