const db = require ('../database/models');
const { Op } = require("sequelize");
const { validationResult} = require ('express-validator');

const controlador = {
    browse: async (req, res) => {
        try {
            let list = await db.Product.findAll();
            return res.render('../views/products/products.ejs', {list});
        }catch (err) {
            console.log('home-err: ' + err);
        }
    },
    search: async (req, res) => {
        try {
            let list = await db.Product.findAll({
                where: {
                    name: {[Op.like]: '%' + req.query.product + '%'}
                }
            });
            return res.render('../views/products/search.ejs', {list});
        }catch (err) {
            console.log('search-err: ' + err);
        }
    },
    addCart: async (req, res) => {

            let theProduct = await db.Product.findByPk(req.params.id, {
                include: ['materials', 'colors'],
                raw: true,
                nest: true
                });
            return res.render('../views/products/productCart.ejs', {theProduct} )
            },
    detail:  async (req, res) => {
        try {
            let id = req.params.id;
            let productFind = await db.Product.findByPk(id, {
                include: ['materials', 'colors'],
                raw: true,
                nest: true
                });
            return res.render('../views/products/productDetail.ejs', {theProduct: productFind} )
        }catch (err) {
            console.log('detail-err: ' + err)
        }
    },
    create: async (req, res) =>{
        try {
            let categories = await db.Category.findAll();
            let materials = await db.Material.findAll();
            let colors = await db.Color.findAll();
            res.render('../views/products/newProduct', {categories, materials, colors});
        } catch (err) {
            console.log('create-err: ' + err );
        }
    },    
    add: async function(req, res) {
            const validate = validationResult(req);

            if (validate.errors.length > 0) {
                return res.render('../views/products/newProduct', {
                    errors: validate.mapped(),
                    oldData: req.body
                });
            }


        /*try {
            let product = await db.Product.create({
                ...req.body,
                cat_id: req.body.category,               
                image: req.file? req.file.filename : ''
            });
            product.addMaterials(req.body.materials);
            product.addColors(req.body.colors);
            return res.redirect('/product');
        } catch (err) {
            console.log('add-err: ' + err);
        }*/
    },
    edit: async (req, res) => {
        try {
            const id = req.params.id;
            let categories = await db.Category.findAll();
            let materials = await db.Material.findAll();
            let colors = await db.Color.findAll();
            let productFind = await db.Product.findByPk(id, {
                include:['materials', 'colors'],
                raw: true,
                nest: true
            });
            res.render('../views/products/modProduct.ejs', {theProduct: productFind, categories, materials, colors})
        } catch (err) {
            console.log('edit-err: ' + err);
        }
    },
    update: async (req, res) => {
            let theProduct = await db.Product.findByPk(req.params.id, {
                include:['materials', 'colors']
            }); 
            theProduct.removeMaterials(theProduct.materials);
            theProduct.removeColors(theProduct.colors);
            theProduct.addMaterials(req.body.materials);
            theProduct.addColors(req.body.colors);
            theProduct = await db.Product.update(
                {
                    ...req.body,
                    cat_id: req.body? req.body.category : theProduct.category,     
                    image: req.file? req.file.filename : theProduct.image                    
                }, {
                    where: {id: req.params.id
                    }});

            return res.redirect('/product');
    },
    delete: async (req, res) => {
            const id = req.params.id; 
            let productDelete = await db.Product.findByPk(id, {
                include:['materials', 'colors']
            });
            productDelete.removeMaterials(productDelete.materials);
            productDelete.removeColors(productDelete.colors);
            productDelete.destroy();
            return res.redirect('/product');            
    }
};

module.exports = controlador;