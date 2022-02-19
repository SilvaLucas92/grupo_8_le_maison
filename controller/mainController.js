const fs = require('fs');
const path = require('path');
//products data base path
const productsPath = path.join(__dirname, '../data/productsDataBase.json');
//readFIle de la database
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
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
