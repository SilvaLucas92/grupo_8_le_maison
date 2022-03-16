const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../data/productsDataBase.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
const { Product, Category  } = require ('../database/models');
const {Op} = require('sequelize');

const controlador = {
    browse: async (req, res) => {
        try {
            let list = await Product.findAll();
            res.render('../views/products/products.ejs', {list});
        }catch {
            console.log('home-err');
        }
    },
    search: async (req, res) => {
            let list = await Product.findAll({
                where: {
                    name: {[Op.like]: '%' + req.query.product + '%'}
                }
            });
            return res.render('../views/products/search.ejs', {list});

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
    
    detail: async (req,res) => {
		const id = req.params.id; 
		const productFind = await Product.findByPk(id, { include: ['category']});
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

    edit: async (req, res) => {
        const id = req.params.id;
        const productFind = await Product.findByPk(id);
        const categories = await Category.findAll();
        res.render('../views/products/modProduct', {
            theProduct: productFind, categories
        });
    },

    update: (req, res) => {
        const id = req.params.id;
        const updateProduct = Producto.findByPk(oneProduct => {
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

    delete: async (req, res) => {
        const id = req.params.id; 
		const productDelete = await Product.destroy ({where: { id: id}});
        return res.redirect('/product');
    }
};

module.exports = controlador;