const {Product} = require('../database/models');

const controller = {
    home: async (req, res) => {
        try {
            let list = await Product.findAll();
            res.render('../views/home.ejs', {list});
        }catch {
            console.log('home-err');
        }
    }
}

module.exports = controller;
