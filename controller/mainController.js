const fs = require('fs');
const path = require('path');
//products data base path
const productsPath = path.join(__dirname, '../data/productsDataBase.json');
//readFIle de la database
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

const controller = {
    home: (req, res) => {
        return res.render('../views/home.ejs', {
            list: productsData
        });
}
}

module.exports = controller;
