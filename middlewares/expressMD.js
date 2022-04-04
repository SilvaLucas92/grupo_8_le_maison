// Express Validator
const {body} = require ("express-validator");
const path = require('path');

const userValidator = [
    body ('name') .isLength({min:2}).withMessage('Campo Obligatorio . Debe tener minimo 2 caracteres') .notEmpty().bail(),
    body ('email') .isEmail().withMessage('Campo Obligatorio').bail(),
    body ('password') .isLength({min:6}).withMessage('La contraseña debe tener como minimo 6 caracteres').bail(),
];

const productValidator = [
    body ('name')
        .notEmpty().withMessage('Campo Obligatorio').bail()
        .isLength({min: 5}).withMessage('Debe tener minimo 5 caracteres'),
    body ('description').notEmpty().withMessage('Agrega una descrpción'),
    body ('category').notEmpty().withMessage('Selecciona una categoría'),
    body ('materials').notEmpty().withMessage('Selecciona un tipo de material'),
    body ('colors').notEmpty().withMessage('Selecciona un color'),
    body ('price').notEmpty().withMessage('Agregale un precio a tu producto'),
    body ('image').custom((value, { req }) => {
        let file = req.file;
        let extensions = ['.jpg', '.jpeg', '.png', '.gif']

        if (!file){
            throw new Error('Sube una imagen');
        } else {
            let fileExtensions = path.extname(file.originalname)
            if (!extensions.includes(fileExtensions)) {
                throw new Error(`Ingrese un formato válido: ${extensions.join(', ')}`);
            }
        }
        return true;
    })
]

module.exports = userValidator;
module.exports = productValidator;