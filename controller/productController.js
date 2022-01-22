const fs = require ('fs');
const path = require ('path');

// ubicación del archivo JSON//

const filePath = path.resolve(__dirname, '../data/products.json');

//Lectura del archivo JSON Y PARSEADO A ARRAY//

const productsArray = JSON.parse(fs.readFileSync(filePath,'utf8'));


const controlador = {
    cart: (req, res) =>{
        res.render('../views/products/productCart');
    },
    detail:  (req,res) => {
        res.render('../views/products/productDetail');
    },
    create: (req, res) =>{
        res.render('../views/products/newProduct');
    },

    
    mod: (req, res) => {
        res.render('../views/products/modProduct');
    }
};

module.exports = controlador;