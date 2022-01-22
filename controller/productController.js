

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