const controlador = {
    cart: (req, res) =>{
        res.render("productCart");
    },
    detail:  (req,res) => {
        res.render("productDetail")
    }
};

module.exports = controlador;