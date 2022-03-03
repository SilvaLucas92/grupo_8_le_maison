const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../data/productsDataBase.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
const { Product, Category  } = require ('../database/models');

const controlador = {
    browse: async (req, res) => {
        try {
            let list = await Product.findAll();
            res.render('../views/products/products.ejs', {list});
        }catch {
            console.log('home-err');
        }
    },
    cart: (req, res) =>{
        res.render('../views/products/productCart');
    },
    
    addCart: (req, res) => {
		const id = Number(req.params.id); 
		const productFind = productsData.find(oneProduct => oneProduct.id === id);
		return res.render('../views/products/productCart', {
			theProduct: productFind
		});
    } ,

    detail:  (req,res) => {
		const id = Number(req.params.id); 
		const productFind = productsData.find(oneProduct => oneProduct.id === id);
		return res.render('../views/products/productDetail', {
			theProduct: productFind
		});
    },

    create: async (req, res) =>{
        try {
            let categories = await Category.findAll();
            res.render('../views/products/newProduct', {categories});
        } catch {
            console.log('create-err');
        }
    },
    
    add: async function(req, res) {
        try {
            let product = await Product.create({
                ...req.body,
                cat_id: req.body.category,
                image: req.file? req.file.filename : ''
            });
            return res.redirect('/product');
        } catch {
            console.log('add-err');
        }
    },

    edit: (req, res) => {
        const id = Number(req.params.id);
        const productFind = productsData.find(oneProduct=>oneProduct.id===id);
        res.render('../views/products/modProduct', {
            theProduct: productFind
        });
    },

    update:(req, res) => {
        const id = Number(req.params.id);
        const updateProduct = productsData.map(oneProduct => {
            if (oneProduct.id === id){
                return{     
                    ...oneProduct,
                    name: req.body.name? req.body.name : oneProduct.name,
                    description: req.body.description? req.body.description : oneProduct.description,
                    price: req.body.price? req.body.price : oneProduct.price,
                    category: req.body.category? req.body.category : oneProduct.category,
                    image: req.file.filename? req.file.filename : oneProduct.image
                }
            }
            return oneProduct;
        });
        fs.writeFileSync(productsPath, JSON.stringify(updateProduct, null, ' '));
        return res.redirect('/product');
    },

    delete: (req, res) => {
        const id = Number(req.params.id);
        const productsArrayFiltered = productsData.filter(oneProduct => oneProduct.id !== id);
        fs.writeFileSync(productsPath, JSON.stringify(productsArrayFiltered, null, ' '));
        return res.redirect('/product'); 
    }
};

module.exports = controlador;