const controlador = {
    home: (req, res) =>{
        res.render("home");
        },
    login: (req, res)=>{
        res.render("login");
    },
    register: (req, res)=>{
        res.render("register")
    },
    cart: (req, res) =>{
        res.render("productCart");
    },
    detail:  (req,res) => {
        res.render("productDetail")
    }
    
};


module.exports = controlador;