const controlador = {
    browse: (req, res) =>{
        res.send('Lista de Productos');
    },
    cart: (req, res) =>{
        res.render('../views/products/productCart');
    },
    detail:  (req,res) => {
        res.render('../views/products/productDetail');
    },
    create: (req, res) =>{
        res.render('../views/products/newProduct');
    },
    add: (req, res) => {
        const productName = req.body.name;
        const productPrice = req.body.price;
        const productSave = productName + productPrice
      
        //Acá falta redireccionar
        res.send('El producto' +' ' + productName + ' ' + '$'+ productPrice + ' ' + 'fué guardado con éxito');
    },
    mod: (req, res) => {
        const productId = req.params.id;
        res.render('../views/products/modProduct');
    },
    update: (req, res) => {
        res.send('Producto actualizado');
    },
    delete: (req, res) => {
        const productId = req.params.id;
        res.send('Eliminaste el producto' + productId);
    },
};

module.exports = controlador;